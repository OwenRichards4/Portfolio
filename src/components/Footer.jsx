import { profile, social } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__note">
          Designed &amp; built by {profile.name}.
        </p>
        <div className="footer__links">
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
            GitHub
          </a>
          <a href={social.googleSites} target="_blank" rel="noopener noreferrer">
            <ion-icon name="newspaper-outline"></ion-icon>
            Google Sites
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
