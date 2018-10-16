import React from 'react'

import Layout from '../components/layout'
import gaby from '../images/TS-Gaby.gif'
import jesse from '../images/TS-Jesse.gif'
import calcifer from '../images/TS-Calcifer.gif'

const AboutPage = (props) => (
  <Layout>
    <div className="AboutPage">
      <h1>Our Story</h1>

      <h2 style={{fontSize: 20, margin: "0 auto 2rem"}}>The little details that bring your home to life,<br/> handmade with lasers and love.</h2>
      <p style={{maxWidth: 460, margin: "0 auto 2rem"}}>Third Son Laserworks ran from 2014 to 2017. We had a blast sharing with you our passion for the little details that make you smile and turn your house into a home. Everything we've made is thoughtfully designed, precision cut with lasers, and finished by hand.</p>
      <p style={{maxWidth: 460, margin: "0 auto 2rem"}}>As Jesse and Gaby have both moved on to other projects, this site remains as a gallery of the work we produced over those three years. You can still write to us at "hello AT third-son.com", or take a walk down memory lane on <a style={{color: "#f8bb00"}} href="https://www.instagram.com/thirdsonlaser/">Instagram</a> and <a style={{color: "#f8bb00"}} href="https://www.youtube.com/channel/UC0-wBji64X3tr6T4zhCYQaw">YouTube</a>.</p>

      <h2>Our Team</h2>
      <div style={{maxWidth: 800, margin: "0 auto"}}>
        <div style={{width: 260, float: "left", margin: "0 auto", padding: "0 10px"}}>
          <div className="circle" style={{ background: "url("+jesse+") center no-repeat", backgroundSize: "cover"}} alt="Jesse" />
          <h3>Jesse</h3>
          <div className="bio">
            <p>Jesse has over three years experience making things with laser cutters. His whimsical ideas are focused by Gaby's keen eye into Third Son’s designs in a collaborative process fueled by laughter and pho. He also writes software to aid the design process and handles the website. Allergies prevent him from having pets, so he makes cute things and names inanimate objects instead.</p>
          </div>
        </div>

        <div style={{width: 260, float: "left", margin: "0 auto", padding: "0 10px"}}>
          <div className="circle" style={{ background: "url("+gaby+") center no-repeat", backgroundSize: "cover"}} alt="Gabriela" />
          <h3>Gabriela</h3>
          <div className="bio">
            <p>Gabriela has a passion for visual storytelling and years of expertise in online communications. She prides herself on her attention to detail, from telling a story to interacting with customers. Gaby produces Third Son’s videos and handles social media. And she chips in on making things with lasers. She does a lot. Her realistic robot laser sounds are on point.</p>
          </div>
        </div>

        <div style={{width: 260, float: "left", margin: "0 auto", padding: "0 10px"}}>
          <div className="circle" style={{ background: "url("+calcifer+") center no-repeat", backgroundSize: "cover"}} alt="Calcifer" />
          <h3>Calcifer</h3>
          <div className="bio">
            <p>A first class Full Spectrum 45W fire demon, Calcifer is a powerhouse who makes all this possible. He’s temperamental, often needing praise and fine tuning to keep burning smoothly, but we love him all the same.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
