import React from "react"
import layoutstyle from "../styles/layoutstyle.module.css"
import { Link } from "gatsby"


const ListLink = props => (
    <li className={layoutstyle.tablist}>
        <Link className={layoutstyle.tabs} to={props.to}>{props.children}</Link>
    </li>
)

/*
const navTop = {
    backgroundColor: "#333",
    transition: "all 0.3s",
};

const navScroll = {
    backgroundColor: "#F00",
    transition: "all 0.3s",
};


const Navigation = props => (
    <ul>
        {props.children}
    </ul>
)
*/



export default function Layout({ props }) {
    return (

        <div className={layoutstyle.banner}>
            <header className={layoutstyle.banned}>


                <ul className={layoutstyle.pagetabs}>
                    <ListLink to="/#about">About</ListLink>
                    <ListLink to="/#contact">Contact</ListLink>
                    <ListLink to="/#projects">Projects</ListLink>

                </ul>
                <Link className={layoutstyle.homelink} to="/">PETER JIANG</Link>


            </header>

        </div>


    )

}
