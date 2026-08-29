import "./Header.scss";
import { useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";

const flagsImg = {
  es: "/spain-flag.svg",
  en: "/uk-flag.svg"
}

const flagComponent = (lang, toggleLanguage) => {
  const altText = lang === "es" ? "Cambiar idioma a español" : "Switch language to English";
  return <span className="lang-container-btn" onClick={toggleLanguage}> <img src={process.env.PUBLIC_URL + flagsImg[lang]} alt={altText} /></span>
}

const Header = (params) => {
  const { scroll } = params;
  const [openMenu, setOpenMenu] = useState(false);
  const { t, lang, toggleLanguage } = useGlobal();
  const header = t?.header || {};

  return (
    <>
      <nav className={`navbar${scroll ? " blur" : ""}`}>
        <div className="container-text-and-btn">
          <h3 className="heebo">portfolio<span className="red-text">.</span></h3>

        </div>

        <div className="btn-menu-mobile-container">
          <div className={`flag-mobile ${openMenu ? "open" : ""}`}>
            {flagComponent(lang, toggleLanguage)}
          </div>
          <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
            <span style={{ display: "block", height: "2px", width: "100%", background: "rgb(22, 21, 15)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", height: "2px", width: "100%", background: "rgb(22, 21, 15)", borderRadius: "2px" }}></span>
            <span style={{ display: "block", height: "2px", width: "70%", background: "rgb(212, 55, 47)", borderRadius: "2px" }}></span>
          </button>
        </div>

        <span className="links-container">
          <a href="#about">{header.navAbout}</a>
          <a href="#techStack">{header.navStack}</a>
          <a href="#projects">{header.navProjects}</a>
          <a href="#contact">{header.navContact}</a>
          {flagComponent(lang, toggleLanguage)}
        </span>

      </nav>

      <div className={`menu-panel ${openMenu ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpenMenu(false)}><span>01</span>{header.navAbout}</a>
        <a href="#techStack" onClick={() => setOpenMenu(false)}><span>02</span>{header.navStack}</a>
        <a href="#projects" onClick={() => setOpenMenu(false)}><span>03</span>{header.navProjects}</a>
        <a href="#contact" onClick={() => setOpenMenu(false)}><span>04</span>{header.navContact}</a>


      </div></>
  );
};

export default Header;

