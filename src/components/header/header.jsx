import "./Header.scss";
import { useState } from "react";

const Header = (params) => {
  const { scroll } = params;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className={`navbar${scroll ? " blur" : ""}`}>
        <div className="container-text-and-btn">
          <h3 className="heebo">portfolio<span className="red-text">.</span></h3>

        </div>
        <button className="menu-btn" data-dc-tpl="17" type="button" data-menubtn="1" aria-label="Abrir menú" aria-expanded="false" onClick={() => setOpenMenu(!openMenu)}>
          <span data-dc-tpl="18" style={{ display: "block", height: "2px", width: "100%", background: "rgb(22, 21, 15)", borderRadius: "2px" }}></span>
          <span data-dc-tpl="19" style={{ display: "block", height: "2px", width: "100%", background: "rgb(22, 21, 15)", borderRadius: "2px" }}></span>
          <span data-dc-tpl="20" style={{ display: "block", height: "2px", width: "70%", background: "rgb(212, 55, 47)", borderRadius: "2px" }}></span>
        </button>

        <span className="links-container">
          <a href="#about">Sobre mí</a>
          <a href="#techStack">Stack</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
          <button className="btn btn-secondary">Contratame</button>
        </span>
      </nav>
      <div className={`menu-panel ${openMenu ? "open" : ""}`}>
        <a href="#about"><span>01</span>Sobre mí</a>
        <a href="#techStack"><span>02</span>Stack</a>
        <a href="#projects"><span>03</span>Proyectos</a>
        <a href="#contact"><span>04</span>Contacto</a>
        <button className="btn btn-secondary">Contratame</button>
      </div></>
  );
};

export default Header;
