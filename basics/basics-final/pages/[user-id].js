import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import { getUserData } from '../lib/user-data'

export default function Home({ userData }) {
  return (
    <>
      <Head>
        <title>{'SSR Page'}</title>
      </Head>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <p>{`User Name : ${userData.name}`}</p>
      <p>{`User Address : ${userData.address}`}</p>
    </>
  )
}

export async function getServerSideProps(context) {
  const userData = getUserData(context.params['user-id']);

  return {
    props: {
      userData
    }
  }
}
