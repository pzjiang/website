import React from "react"
import Layout from "../components/layout.js"
import style from "../styles/index.module.css"






export default function Home() {
  return (

    <div className={style.mainDesk}>
      <Layout>
      </Layout>

      <div className={style.bodyText}>


        <section id="welcome" className={style.welcomeSect}>

        </section>

        <section id="about" className={style.aboutSect}>

          <h1 style={{ font: 32, marginTop: "4vh", color: "#5c2d2d" }}>About me</h1>


          <p style={{ textAlign: "left" }}>
            Hello Hello! My name is Peter Jiang, and I am currently a Sophomore at Purdue University.
          </p>


        </section>

        <section id="project" className={style.projectSect}>
          <h1>projects tab</h1>

        </section>

        <section id="contact" className={style.contactSect}>
          <div>
            <h1>contact me</h1>
          </div>

        </section>

      </div>

    </div >
  )
}
