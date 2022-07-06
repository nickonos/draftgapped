import React from "react";

export default function Navbar({children} : {children : React.ReactNode}){

    return(
        <>
            <ul className="border-b border-slate-800 flex h-16 fixed w-screen text-blue-400 text-2xl items-center justify-center">
                <li className="px-8 text-center hover:text-blue-300">
                    <a href={"/"}>
                        Home
                    </a>
                </li>
                <li className="px-8 hover:text-blue-300">
                    <a href={"/lobby/create"}>
                        Play
                    </a>
                </li>
                <li className="px-8 hover:text-blue-300">
                    <a href={"/about"}>
                        About
                    </a>
                </li>
            </ul>
            <main className={"w-screen h-screen"}>
                {children}
            </main>
        </>
    )
}