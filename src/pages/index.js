import React from "react"
import Layout from "../components/layout.js"
import style from "../styles/index.css"






export default function Home() {
  return (
    <div className={style.mainDesk}>

      <Layout>


      </Layout>

      <section id="welcome" className={style.welcomeSect}>

      </section>

      <section id="about" className={style.aboutSect}>
        <div>
          <h1 style={{ backgroundColor: "lavenderblush", textAlign: "center" }}>About me</h1>
        </div>

      </section>

      <section id="project" className={style.projectSect}>
        <h1>projects tab</h1>

      </section>

      <section id="contact" className={style.contactSect}>
        <div>
          <h1>contact me</h1>
        </div>

      </section>



    </div >
  )
}
