import fs from 'fs'
import path from 'path'

export function getUserData(userId) {
  const userDataDirectory = path.join(process.cwd(), 'data')
  const allUsersData = JSON.parse(fs.readFileSync(path.join(userDataDirectory, 'user-data.json'), 'utf8'));
  const userKey = `user-${userId}`;
  const userData = allUsersData[userKey];

  return userData;
}