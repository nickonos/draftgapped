import Head from "next/head";
import React from "react";

export default function Header({children} : {children : React.ReactNode}){
    return (
        <>
            <Head>
                <title>League Draft App</title>
                <meta name="description" content="An app to create a League of Legends Draft" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}