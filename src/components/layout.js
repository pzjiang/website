import React from "react"
import layoutstyle from "../styles/layoutstyle.module.css"
import { Link } from "gatsby"


const ListLink = props => (
    <li className={layoutstyle.tabs}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {
    return (

        <div className={layoutstyle.banner}>
            <header className={layoutstyle.banned}>
                <h1>hello</h1>

                <ul className={layoutstyle.pagetabs}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>


                </ul>


            </header>


            {children}

        </div>


    )

}
