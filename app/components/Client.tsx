'use client'

import React from 'react'

export default function Client({children} : {children: React.ReactNode}) {

    const [isClient, setIsClient] = React.useState(false)
    React.useEffect(()=>{
        setIsClient(true)
    }, [])

  return (
   ( <div>{isClient? <div>{children}</div>: null}</div>)
  )
}