'use client'
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./includes/Header";
import Sidebar from "./includes/Sidebar";
import Login from "../components/auth/Signup";
import Signup from "../components/auth/Signup";

export default function MainLayout({children} : {children: React.ReactNode}) {

    const pathname = usePathname()

    return (
        <>
        <Header/>
        <Signup/>
        <div className={`flex justify-between mx-auto w-full tg:px-2.5 px-0 ${pathname=='/' ? 'max-w-[1140px]' : ''}`}>
           <Sidebar/>
            {children}

        </div>

        </>
    )
}
