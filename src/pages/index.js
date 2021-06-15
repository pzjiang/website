import React from "react"
import Layout from "../components/layout.js"
import style from "../styles/index.module.css"
//import Footer from "../components/footer.js"






export default function Home() {
  return (

    <div className={style.mainDesk}>
      <Layout>
      </Layout>

      <div className={style.bodyText}>


        <section id="welcome" className={style.welcomeSect}>

        </section>

        <section id="about" className={style.aboutSect}>

          <h1 style={{ font: 32, marginTop: "4vh", color: "#5c2d2d", textAlign: "center" }}>About me</h1>


          <p style={{ textAlign: "left" }}>
            &emsp; &emsp; Hello Hello! My name is Peter Jiang, and I am currently a Sophomore at Purdue University. I am currently pursuing a degree in Computer Science,
            with a dual concentration in Software Engineering and Machine Learning.
            <br /> <br />
            &emsp; &emsp; Now you might be wondering, why did I choose computer science? What was it that
            drew me to this field?

          </p>

        </section>

        <section id="project" className={style.projectSect}>
          <h1>Projects</h1>

        </section>

        <section id="contact" className={style.contactSect}>
          <div>
            <h1>Contact</h1>
          </div>

        </section>



      </div>


    </div >
  )
}
