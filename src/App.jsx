import { useState, useEffect } from 'react';
import './App.css';
import selfImg from './assets/self-img.jpg';
import bgImg from './assets/scrolling-background.jpg';
import liveStreamPlatform from './assets/live-streaming-platform.png'
import databaseSystem from './assets/client-database.png'
import financialDash from './assets/financial-dashboard.png'
import rlStatTracker from './assets/rocket-league-stats-tracker.png'

function App() {
  const [count, setCount] = useState(0)
  const [formStatus, setFormStatus] = useState("idle");

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
      document.getElementById('header-outline').style.opacity = 0;
      document.getElementById('person-outline').style.opacity = 0;
      document.getElementById('construct-outline').style.opacity = 0;
      document.getElementById('server-outline').style.opacity = 0;
      document.getElementById('mail-outline').style.opacity = 0;

      setTimeout(() => {
        document.getElementById('header-outline').style.display = "none";
        document.getElementById('person-outline').style.display = "none";
        document.getElementById('construct-outline').style.display = "none";
        document.getElementById('server-outline').style.display = "none";
        document.getElementById('mail-outline').style.display = "none";
      }, 500)

      document.getElementById('nav').style.top = "475px";
    } else {
      document.getElementById('header-outline').style.display = "block";
      document.getElementById('person-outline').style.display = "block";
      document.getElementById('construct-outline').style.display = "block";
      document.getElementById('server-outline').style.display = "block";
      document.getElementById('mail-outline').style.display = "block";

      setTimeout(() => {
        document.getElementById('header-outline').style.opacity = 1;
        document.getElementById('person-outline').style.opacity = 1;
        document.getElementById('construct-outline').style.opacity = 1;
        document.getElementById('server-outline').style.opacity = 1;
        document.getElementById('mail-outline').style.opacity = 1;
      }, 100)

      document.getElementById('nav').style.top = "385px";
    }
    navTog = !navTog;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formStatus === "sending") return;

    setFormStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  
  function moveWindow(moveTo) {
    if (moveTo == "header") {window.scroll(0, 0)}
    else if (moveTo == "about-me") {window.scroll(0, 900)}
    else if (moveTo == "past-work") {window.scroll(0, 1900)}
    else if (moveTo == "repos") {window.scroll(0, 2700)}
    else {window.scroll(0, 4000)}
  }

  return (
    <>
      <img className="scrolling-background" src={bgImg}></img>
      <header>
        <h1 id="name">Owen Richards</h1>
        <h4 id="port-text">Software Engineer&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Full Stack&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Cloud&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;AI Development</h4>
      </header>
      <main>
        <section className="section-two">
          <img className="self-photo" src={selfImg} alt="photo of Owen Richards"></img>
          <div className="about">
            <section className="subheading-flex-1">
              <ion-icon name="person-outline" className="subheading-icon"></ion-icon>
              <h2 className="subheading">About Me</h2>
            </section>
            <h4 className="degree">Bachelor's in Computer Science and Applied Engineering</h4>
            <h4 className="certificate">Undergraduate Certificate in Software Engineering</h4>
            <h4 className="certificate">University of Cincinnati - May 2025</h4>
            <p className="past-work">
              I'm a recent graduate with four co-op rotations at Siemens Digital Industries Software, where I worked on full-stack development, cloud data management, and data pipeline integrations.
              <br></br><br></br>
              My experience includes building and maintaining AWS-backed services (such as Lambda, DynamoDB, S3, IAM, and API Gateways), developing company-standard websites and applications to enhance worker productivity, and researching the deployment and fine-tuning capabilities of multiple AI models.
            </p>
          </div>
        </section>

        <section className="section-three">
          <section className="subheading-flex">
            <ion-icon name="construct-outline" className="subheading-icon"></ion-icon>
            <h2 className="subheading">Programming Languages</h2>  
          </section>
          <h4>I've taken on numerous projects and classes that have required me to learn or increase my knowledge of new programming languages.</h4>
          <ul className="scrolling-text">
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
          <h4>I'm most confident with Python, HTML, JavaScript, and CSS, but I've commonly used other languages like TypeScript, C++, and VBA during past professional and academic projects.</h4>
          <ul className="scrolling-text-2">
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
          <h4>Since graduating, I've spent my time practicing and researching new languages such as Go and XML. I've also taught myself several other languages during my senior capstone project, such as GDScript and C#.</h4>
        </section>
        
        <section className="section-four">
          <section className="subheading-flex">
            <ion-icon name="server-outline" className="subheading-icon"></ion-icon>
            <h2 className="subheading">Public Repositories</h2>
          </section>
          <div className="websites-grid">
            <a className="container" href="https://owenrichards4.github.io/Live-Streaming-Platform/" target="_blank" rel="noopener noreferrer">
              <h3>Live Streaming Platform</h3>
              <img src={liveStreamPlatform}></img>
            </a>
            <a className="container" href="https://github.com/OwenRichards4/Client-Database" target="_blank" rel="noopener noreferrer">
              <h3>Database System</h3>
              <img src={databaseSystem}></img>
            </a>
          </div>
          <div className="websites-grid">
            <a className="container" href="https://owenrichards4.github.io/Financial-Dashboard/" target="_blank" rel="noopener noreferrer">
              <h3>Financial Dashboard</h3>
              <img src={financialDash}></img>
            </a>
            <a className="container" href="https://owenrichards4.github.io/UI-Project-1/" target="_blank" rel="noopener noreferrer">
              <h3>RL Statistics Tracker</h3>
              <img src={rlStatTracker}></img>
            </a>
          </div>
        </section>

        <section className="section-five">
          <section className="subheading-flex">
            <ion-icon name="mail-outline" className="subheading-icon"></ion-icon>
            <h2 className="subheading">Contact Me</h2>
          </section>
          <form action="https://formspree.io/f/mvgejqpp" method="POST" onSubmit={handleSubmit}>
          <div className="names-flex">
            <section className="name-label-flex">
              <label htmlFor="first-name">First Name*</label>
              <input id="first-name" type="text" name="firstName" required></input>
            </section>
            <section className="name-label-flex">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" name="lastName"></input>
            </section>
          </div>
          <section className="name-label-flex">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required></input>
          </section>
          <section className="name-label-flex">
            <label htmlFor="header">Header</label>
            <input id="header" type="text" name="subject"></input>
          </section>
          <section className="name-label-flex">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" required></textarea>
          </section>
          <button className="send-message" type="submit">Send</button>
          {formStatus === "success" && (
            <p className="form-success">Thanks for reaching out — I’ll get back to you soon.</p>
          )}

          {formStatus === "error" && (
            <p className="form-error">Something went wrong. Please try again or contact me via LinkedIn.</p>
          )}

          {formStatus === "sending" && (
            <p className="form-sending">Sending…</p>
          )}

          </form>
        </section>
      </main>
      <footer>
        <a className="footer-flex" href="https://github.com/OwenRichards4" target="_blank" rel="noopener noreferrer">
          <label htmlFor='github'>GitHub</label>
          <ion-icon name="logo-github" id="github"></ion-icon>
        </a>
        <a className="footer-flex" href="https://sites.google.com/view/owenr-userinterface/home" target="_blank" rel="noopener noreferrer">
          <label htmlFor='google-sites'>Google Sites</label>
          <ion-icon name="newspaper-outline" id="google-sites"></ion-icon>
        </a>
        <a className="footer-flex" href="https://www.linkedin.com/in/owen-richards-9a4a94207/" target="_blank" rel="noopener noreferrer">
          <label htmlFor='linkedin'>LinkedIn</label>
          <ion-icon name="logo-linkedin" id="linkedin"></ion-icon>
        </a>
      </footer>
      <nav id="nav">
        <ion-icon onClick={navToggle} name="layers-outline"></ion-icon>
        <ion-icon onClick={() => moveWindow("header")} name="document-outline" className="header-outline" id="header-outline"></ion-icon>
        <ion-icon onClick={() => moveWindow("about-me")} name="person-outline" className="person-outline" id="person-outline"></ion-icon>
        <ion-icon onClick={() => moveWindow("past-work")} name="construct-outline" className="construct-outline" id="construct-outline"></ion-icon>
        <ion-icon onClick={() => moveWindow("repos")} name="server-outline" className="server-outline" id="server-outline"></ion-icon>
        <ion-icon onClick={() => moveWindow("contact")} name="mail-outline" className="mail-outline" id="mail-outline"></ion-icon>
      </nav>
      <div className="scroll-watcher"></div>
    </>
  )
}

export default App