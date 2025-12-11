import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // MAIN
  // About
  // Skills
  // Github Links
  // Contact
  // Footer

  let navTog = false;
  function navToggle() {
    if (navTog) {
      document.getElementById('person-outline').style.color = "#131313";
      document.getElementById('construct-outline').style.color = "#131313";
      document.getElementById('server-outline').style.color = "#131313";
      document.getElementById('mail-outline').style.color = "#131313";
      
      document.getElementById('nav').style.top = "50px";
    } else {
      document.getElementById('person-outline').style.color = "white";
      document.getElementById('construct-outline').style.color = "white";
      document.getElementById('server-outline').style.color = "white";
      document.getElementById('mail-outline').style.color = "white";

      document.getElementById('nav').style.top = "-20px";
    }
    navTog = !navTog;
  }

  return (
    <>
      <main>
        <h1>Owen Richards</h1>

        
        <h2 class="subheading">About Me</h2>
        <div class="about">
          <img></img>
          <h4>Bachelor's in Computer Science and Applied Engineering</h4>
          <p>Undergraduate Certificate in Software Engineering</p>
          <p></p>
          <p>Four Co-op rotations at Siemens Digital Industires Software.</p>
          <p> - AWS Pipelines</p>
          <p> - Full Stack Software Engineering</p>
          <p> - AI Services</p>
        </div>

        <h2 class="subheading">Publicly Hosted Websites</h2>
        <div class="websites-grid">
          <a class="container" href="https://owenrichards4.github.io/Live-Streaming-Platform/" target="_blank" rel="noopener noreferrer">
            <h3>Live Streaming Platform</h3>
            <img src="src\assets\live-streaming-platform.png"></img>
          </a>
          <a class="container" href="https://github.com/OwenRichards4/Client-Database" target="_blank" rel="noopener noreferrer">
            <h3>Database System</h3>
            <img src="src\assets\client-database.png"></img>
          </a>
          <a class="container" href="https://owenrichards4.github.io/Financial-Dashboard/" target="_blank" rel="noopener noreferrer">
            <h3>Financial Dashboard</h3>
            <img src="src\assets\financial-dashboard.png"></img>
          </a>
          <a class="container" href="https://owenrichards4.github.io/UI-Project-1/" target="_blank" rel="noopener noreferrer">
            <h3>RL Statistics Tracker</h3>
            <img src="src\assets\rocket-league-stats-tracker.png"></img>
          </a>
        </div>
      </main>
      <nav id="nav">
        <ion-icon onClick={navToggle} name="layers-outline"></ion-icon>
        <ion-icon name="person-outline" class="person-outline" id="person-outline"></ion-icon>
        <ion-icon name="construct-outline" class="construct-outline" id="construct-outline"></ion-icon>
        <ion-icon name="server-outline" class="server-outline" id="server-outline"></ion-icon>
        <ion-icon name="mail-outline" class="mail-outline" id="mail-outline"></ion-icon>
      </nav>
      
    </>
  )
}

export default App
