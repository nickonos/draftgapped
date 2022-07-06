 import Head from "next/head";
import { trpc } from "../utils/trpc";
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
      <div className={"flex justify-center items-center w-full h-full text-white text-xl"}>
          Home
      </div>
  )
}

export default Home