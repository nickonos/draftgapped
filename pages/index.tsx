import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import DraftsForm from "../components/DraftsForm";

const Home: NextPage = () => {
  return (
      <div >
          <Head>
              <title>League Draft App</title>
              <meta name="description" content="An app to create a League of Legends Draft" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={"w-screen h-screen"}>

          </div>
    </div>
  )
}

export default Home
