import { useState, useEffect } from 'react'
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

  const handleChange = event => {
    setMessage(event.target.value)
  }
  

  useEffect(() => {
    const height = window.innerHeight;

    let ele = document.getElementById('name');
    let newHeight = (height / 2) - (ele.offsetHeight / 2) - 30;
    ele.style.top = `${newHeight}px`;

    let ele2 = document.getElementById('port-text');
    ele2.style.top = `${newHeight}px`;
  })
  
  let navTog = false;
  function navToggle() {
    if (navTog) {
      document.getElementById('person-outline').style.opacity = 0;
      document.getElementById('construct-outline').style.opacity = 0;
      document.getElementById('server-outline').style.opacity = 0;
      document.getElementById('mail-outline').style.opacity = 0;

      setTimeout(() => {
        document.getElementById('person-outline').style.display = "none";
        document.getElementById('construct-outline').style.display = "none";
        document.getElementById('server-outline').style.display = "none";
        document.getElementById('mail-outline').style.display = "none";
      }, 500)

      document.getElementById('nav').style.top = "475px";
    } else {
      document.getElementById('person-outline').style.display = "block";
      document.getElementById('construct-outline').style.display = "block";
      document.getElementById('server-outline').style.display = "block";
      document.getElementById('mail-outline').style.display = "block";

      setTimeout(() => {
        document.getElementById('person-outline').style.opacity = 1;
        document.getElementById('construct-outline').style.opacity = 1;
        document.getElementById('server-outline').style.opacity = 1;
        document.getElementById('mail-outline').style.opacity = 1;
      }, 100)

      document.getElementById('nav').style.top = "425px";
    }
    navTog = !navTog;
  }

  return (
    <>
      <img class="scrolling-background" src="src/assets/scrolling-background.jpg"></img>
      <header>
        <h1 id="name">Owen Richards</h1>
        <h4 id="port-text">Personal Portfolio</h4>
      </header>
      <main>
        <section class="section-two">
          <img class="self-photo" src="src/assets/self-img.jpg" alt="photo of Owen Richards"></img>
          <div class="about">
            <section class="subheading-flex-1">
              <ion-icon name="person-outline" class="subheading-icon"></ion-icon>
              <h2 class="subheading">About Me</h2>
            </section>
            <h4 class="degree">Bachelor's in Computer Science and Applied Engineering</h4>
            <h4 class="certificate">Undergraduate Certificate in Software Engineering</h4>
            <p class="past-work">Four Co-op rotations at Siemens Digital Industires Software.<br></br>
              - Various AWS Services and Pipelines<br></br>
              - Full Stack Software Engineering<br></br>
              - AI Implementation</p>
          </div>
        </section>

        <section class="section-three">
          <section class="subheading-flex">
            <ion-icon name="construct-outline" class="subheading-icon"></ion-icon>
            <h2 class="subheading">Programming Languages</h2>  
          </section>
          <h4>I've taken on numerous projects and classes that required me to learn new programming languages.</h4>
          <ul class="scrolling-text">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Svelte</li>
            <li>Python</li>
            <li>C++</li>
            <li>VBA</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Svelte</li>
            <li>Python</li>
            <li>C++</li>
            <li>VBA</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Svelte</li>
            <li>Python</li>
            <li>C++</li>
            <li>VBA</li>
          </ul>
          <h4>I'm most confident Python, HTML, JavaScript, and CSS but I've used other languages like C++ and VBA commonly during past projects.</h4>
          <ul class="scrolling-text-2">
            <li>GDScript</li>
            <li>Go</li>
            <li>C</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Java</li>
            <li>C#</li>
            <li>XML</li>
            <li>GDScript</li>
            <li>Go</li>
            <li>C</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Java</li>
            <li>C#</li>
            <li>XML</li>
            <li>GDScript</li>
            <li>Go</li>
            <li>C</li>
            <li>SQL</li>
            <li>NoSQL</li>
            <li>Java</li>
            <li>C#</li>
            <li>XML</li>
          </ul>
          <h4>The University of Cincinnati's computer science course included the occasional study of various languages not touched upon in futher classes such as SQL, C, and Java. Since graduating, I've spent time practicing and researching new languages such as Go and XML. I've also taught myself several other languages during my senior capstone project like GDScript and C#.</h4>
        </section>
        
        <section class="section-four">
          <section class="subheading-flex">
            <ion-icon name="server-outline" class="subheading-icon"></ion-icon>
            <h2 class="subheading">Publicly Repositories</h2>
          </section>
          <div class="websites-grid">
            <a class="container" href="https://owenrichards4.github.io/Live-Streaming-Platform/" target="_blank" rel="noopener noreferrer">
              <h3>Live Streaming Platform</h3>
              <img src="src\assets\live-streaming-platform.png"></img>
            </a>
            <a class="container" href="https://github.com/OwenRichards4/Client-Database" target="_blank" rel="noopener noreferrer">
              <h3>Database System</h3>
              <img src="src\assets\client-database.png"></img>
            </a>
          </div>
          <div class="websites-grid">
            <a class="container" href="https://owenrichards4.github.io/Financial-Dashboard/" target="_blank" rel="noopener noreferrer">
              <h3>Financial Dashboard</h3>
              <img src="src\assets\financial-dashboard.png"></img>
            </a>
            <a class="container" href="https://owenrichards4.github.io/UI-Project-1/" target="_blank" rel="noopener noreferrer">
              <h3>RL Statistics Tracker</h3>
              <img src="src\assets\rocket-league-stats-tracker.png"></img>
            </a>
          </div>
        </section>

        <section class="section-five">
          <section class="subheading-flex">
            <ion-icon name="mail-outline" class="subheading-icon"></ion-icon>
            <h2 class="subheading">Contact Me</h2>
          </section>
          <div class="names-flex">
            <section class="name-label-flex">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text"></input>
            </section>
            <section class="name-label-flex">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text"></input>
            </section>
          </div>
          <section class="name-label-flex">
            <label htmlFor="email">Email</label>
            <input id="email" type="text"></input>
          </section>
          <section class="name-label-flex">
            <label htmlFor="message">Message</label>
            <textarea id="message" type="text"></textarea>
          </section>
          <button class="send-message">Send</button>
        </section>
      </main>
      <footer>
        <a class="footer-flex" href="https://github.com/OwenRichards4" target="_blank" rel="noopener noreferrer">
          <label htmlFor='github'>GitHub</label>
          <ion-icon name="logo-github" id="github"></ion-icon>
        </a>
        <a class="footer-flex" href="https://sites.google.com/view/owenr-userinterface/home" target="_blank" rel="noopener noreferrer">
          <label htmlFor='google-sites'>Google Sites</label>
          <ion-icon name="newspaper-outline" id="google-sites"></ion-icon>
        </a>
        <a class="footer-flex" href="https://www.linkedin.com/in/owen-richards-9a4a94207/" target="_blank" rel="noopener noreferrer">
          <label htmlFor='linkedin'>LinkedIn</label>
          <ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
        </a>
      </footer>
      <nav id="nav">
        <ion-icon onClick={navToggle} name="layers-outline"></ion-icon>
        <ion-icon name="person-outline" class="person-outline" id="person-outline"></ion-icon>
        <ion-icon name="construct-outline" class="construct-outline" id="construct-outline"></ion-icon>
        <ion-icon name="server-outline" class="server-outline" id="server-outline"></ion-icon>
        <ion-icon name="mail-outline" class="mail-outline" id="mail-outline"></ion-icon>
      </nav>
      <div class="scroll-watcher"></div>
    </>
  )
}

export default App
