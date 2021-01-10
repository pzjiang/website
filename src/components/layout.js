import React from "react"
import layoutstyle from "../styles/layoutstyle.module.css"


export default function Layout({ children }) {
    return (

        <div className={layoutstyle.banner}>
            <h1 className={layoutstyle.banned}>Hello</h1>

            {children}

        </div>


    )

}
