'use client'
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./Header";

export default function Uploadlayout({children} : {children: React.ReactNode}) {
    const pathname = usePathname()

    return (
        <>
      <div className="bg-white h-[180vh]">
        <Header/>
        <div className="flex juctify-between mx-auto w-full px-2 max-w-[1140px] ">
            {children}
        </div>
      </div>
        </>
    )
}
