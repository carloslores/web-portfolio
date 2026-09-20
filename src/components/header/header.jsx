import "./Header.scss";
import { useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";

const flagsImg = {
  es: "/spain-flag.svg",
  en: "/uk-flag.svg"
}

const flagComponent = (lang, toggleLanguage) => {
  const altText = lang === "es" ? "Cambiar idioma a español" : "Switch language to English";
  return <span className="lang-container-btn" onClick={toggleLanguage}> <img src={process.env.PUBLIC_URL + flagsImg[lang]} alt={altText} width="24" height="18" /></span>
}

const Header = (params) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t, lang, toggleLanguage } = useGlobal();
  const header = t?.header || {};

  return (
    <>
      <nav className="navbar blur">
        <div className="container-text-and-btn">
          <h3 className="heebo">portfolio<span className="red-text">.</span></h3>

        </div>

        <div className="btn-menu-mobile-container">
          <div className={`flag-mobile ${openMenu ? "open" : ""}`}>
            {flagComponent(lang, toggleLanguage)}
          </div>
          <button
            type="button"
            className="menu-btn"
            aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={openMenu}
            aria-controls="mobile-menu"
            onClick={() => setOpenMenu((isOpen) => !isOpen)}
          >
            {openMenu ? (
              <img className="close-icon" src={process.env.PUBLIC_URL + "/icon-close.svg"} alt="close button" />
            ) : (
             <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
        </div>

        <span className="links-container">
          <a href="#about">{header.navAbout}</a>
          <a href="#techStack">{header.navStack}</a>
          <a href="#projects">{header.navProjects}</a>
          <a href="#contact">{header.navContact}</a>
          {flagComponent(lang, toggleLanguage)}
        </span>
        <div data-dc-tpl="21" data-progress-track="1" style={{ position: "absolute", left: "0px", right: "0px", bottom: "-1px", height: "2px", background: "transparent", pointerEvents: "none" }}>
          <div data-dc-tpl="22" data-progress="1" style={{ height: "100%", width: "0%", background: "rgb(212, 55, 47)" }}></div>
        </div>
      </nav>

      <div id="mobile-menu" className={`menu-panel ${openMenu ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpenMenu(false)}><span>01</span>{header.navAbout}</a>
        <a href="#techStack" onClick={() => setOpenMenu(false)}><span>02</span>{header.navStack}</a>
        <a href="#projects" onClick={() => setOpenMenu(false)}><span>03</span>{header.navProjects}</a>
        <a className="red-text" href="#contact" onClick={() => setOpenMenu(false)}><span>04</span>{header.navContact}</a>
        
        <div className="hamburger-contact-buttons">
          <a
                    className="btn btn-tertiary"
                    href="https://github.com/carloslores/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {header.hamburgerMenu.buttons.github}
                  </a>
                  <a
                    className="btn btn-tertiary"
                    href="https://www.linkedin.com/in/carlos-lores-h/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {header.hamburgerMenu.buttons.linkedin}
                  </a>
          </div>


      </div></>
  );
};

export default Header;

