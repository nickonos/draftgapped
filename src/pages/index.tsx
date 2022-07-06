import type { NextPage } from 'next'
import {trpc} from "utils/trpc"
import {useEffect} from "react";

const Home: NextPage = () => {
    return (
        <div className={"flex justify-center items-center w-full h-full text-white text-xl"}>
            Home
        </div>
    )
}

export default Home