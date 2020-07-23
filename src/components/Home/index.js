import React from 'react'

import SoundQA from '../Projects/portfolio/SoundQA'
import VoiceFirst from '../Projects/portfolio/VoiceFirst'
import EarlsKitchen from '../Projects/portfolio/EarlsKitchen'

function Home() {
  return (
    <div className="App-header">
      <div className="home-top">
        <h1 className="My-name">Bradley Wong</h1>
        <h2>Front End Web Developer</h2>
      </div>
      <section className="home-about">
        <h1>TL;DR</h1>
        <br/>
        <p className="about-blurb">I am a recent graduate from BCIT's Computer Information Technology Diploma Program.
          I have covered mobile/web development in React, scripting in Python and Bash, automation
          using tools such as Ansible, and also some knowledge of deploying applications to cloud platforms
          such as AWS and Azure.</p>
      </section>
      <section className="home-projects">
        <h1>My Projects</h1>
        <br/>
        <EarlsKitchen />
        <br/>
        <SoundQA />
        <br/>
        <VoiceFirst />
        <br/>
        <br/>
      </section>
    </div>
  )
}

export default Home