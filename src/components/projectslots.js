import React from "react"
import style from "../styles/projectslot.module.css"

const User = props => (
    <div className={style.user}>
        <img src={props.avatar} className={style.avatar} alt="" />
        <div className={style.description}>
            <h2 className={style.projname}>{props.username}</h2>
            <p className={style.descrip}>{props.description}</p>
        </div>

    </div>
)