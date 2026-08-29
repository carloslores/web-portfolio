
import "./welcome.scss";
import { useEffect } from "react";
import { useGlobal } from "../contexts/GlobalContext";

const Welcome = () => {
  const { t } = useGlobal();
  const welcome = t?.welcome || {};

  useEffect(() => {
    const handleScroll = () => {
      const brain = document.getElementById("brain-up");
      if (!brain) return;

      if (window.scrollY >= 100) {
        brain.classList.add("rotate-out-bl");
        brain.classList.remove("vibrate");
      } else {
        brain.classList.remove("rotate-out-bl");
        brain.classList.add("vibrate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="welcome" className="container container-padding">
        <div className="welcome-section-container row no-row-mb">
          <div className="col-7 col-md-12 d-flex align-items-center">
            <div className="left">
              <div className="pre-title">
                <span className="dot-animation">

                </span>
                {welcome.preTitle}
              </div>
              <h1> <div className="word-rise">{welcome.titleLine1}</div>
                <div className="second-word-rise">{welcome.titleLine2With} {' '}
                  <span className="red-text" >
                    {welcome.titleLine2Highlight}</span>

                </div>
              </h1>


              <p>
                {welcome.description}
              </p>

              <div className="hero-contact-container d-flex no-flex-mb">
                <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                  {welcome.ctaWork}  <span data-dc-tpl="48" style={{ fontFamily: '"JetBrains Mono", monospace' }}>↓</span>
                </a>
                <div className="btn-group">
                  <a
                    className="btn btn-tertiary"
                    href="https://github.com/carloslores/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {welcome.github}
                  </a>
                  <a
                    className="btn btn-tertiary"
                    href="https://www.linkedin.com/in/carlos-lores-h/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {welcome.linkedin}
                  </a>
                </div>
              </div>



            </div>
          </div>

          <div className="col-5 d-flex align-items-center">
            <div className="contenedor-idea">
              <div className="lineas-expresivas">
                <div className="linea-idea" style={{ '--giro': '0deg' }}> <div className="linea l1">|</div></div>
                <div className="linea-idea" style={{ '--giro': '0deg' }}> <div className="linea l2">|</div></div>
                <div className="linea-idea" style={{ '--giro': '0deg' }}> <div className="linea l3">|</div></div>
                <div className="linea-idea" style={{ '--giro': '0deg' }}> <div className="linea l4">|</div></div>
                <div className="linea-idea" style={{ '--giro': '0deg' }}> <div className="linea l5">|</div></div>


              </div>
            </div>
            <div className="welcome-home-img">

              <img className="fire-img" src={process.env.PUBLIC_URL + "/fire-vertical.gif"} alt="Efecto de fuego animado de fondo" />
              <img id="brain-up" className="coder-img brain vibrate" src={process.env.PUBLIC_URL + "/brain.png"} alt="Ilustración conceptual de cerebro con circuitos" />
              <img className="coder-img up-image" src={process.env.PUBLIC_URL + "/coder-up.png"} alt="Ilustración de Carlos Lores - Frontend Developer" />
              <img className="coder-img down-image" src={process.env.PUBLIC_URL + "/coder-down.png"} alt="Ilustración de desarrollador en su escritorio" />
            </div>
            {/* <div className="tech-stack"
              style={{ position: 'absolute', left: '-14px', bottom: '18px', zIndex: 3, background: 'rgb(212, 55, 47)', color: 'rgb(236, 234, 228)', padding: '12px 18px', borderRadius: '100px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', animation: '0.7s cubic-bezier(0.2, 0.7, 0.2, 1) 2.35s 1 normal both running cl-rise' }}>
              React · Angular · TS</div> */}
          </div>
        </div>
      </section>

      {/* <div className="p-relative">
        <div className="custom-shape-divider-bottom-1742646822">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
    </>
  );
};

export default Welcome;

