import fs from 'fs'
import path from 'path'

export function getUserData(userId) {
  const userDataDirectory = path.join(process.cwd(), 'data')
  const fileContents = fs.readFileSync(path.join(userDataDirectory, 'user-data.json'), 'utf8');
  const key = `user-${userId}`;
  const fileContentsObj = JSON.parse(fileContents);
  const userData = fileContentsObj[key];

  return userData;
}