import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ backgroundImage }) {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <footer
      className="footer"
      style={{
        "--footer-bg-image": `url("${backgroundImage}")`,
      }}
    >
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              F
            </span>

            <span className="footer-logo-text">
              FIT<span>CORE</span>
            </span>
          </Link>

          <p className="footer-quote">
            "Train with purpose. Become your strongest self."
          </p>
        </div>


        {/* SOCIAL MEDIA */}

        <div className="footer-social">
          <span className="footer-label">
            FOLLOW US
          </span>

          <div className="footer-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>


        {/* CONTACT */}

        <div className="footer-contact">
          <span className="footer-label">
            CONTACT
          </span>

          <a href="tel:+923000000000">
            +92 300 0000000
          </a>

          <a href="mailto:hello@fitcore.com">
            hello@fitcore.com
          </a>
        </div>

      </div>


      {/* LAST LINE */}

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} FITCORE.
          All Rights Reserved.
        </span>

        <span className="footer-bottom-quote">
          TRAIN / PERFORM / EVOLVE
        </span>
      </div>

    </footer>
  );
}

export default Footer;