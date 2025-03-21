import { useEffect, useRef } from "react";
import "./about.scss";

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" style={{ height: "100vh" }}>
      <div className="p-relative">
        <div class="custom-shape-divider-top-1742587535">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div id="content">
              {/* <h1>Timeline Concept</h1> */}

              <ul className="timeline">
                <li className="event" data-date="2011">
                  <h3>Registration</h3>
                  <p>
                    Get here on time, it's first come first serve. Be late, get
                    turned away.
                  </p>
                </li>
                <li className="event" data-date="2019">
                  <h3>Opening Ceremony</h3>
                  <p>
                    Get ready for an exciting event, this will kick off in
                    amazing fashion with MOP & Busta Rhymes as an opening show.
                  </p>
                </li>
                <li className="event" data-date="5:00 - 8:00pm">
                  <h3>Main Event</h3>
                  <p>
                    This is where it all goes down. You will compete head to
                    head with your friends and rivals. Get ready!
                  </p>
                </li>
                <li className="event" data-date="8:30 - 9:30pm">
                  <h3>Closing Ceremony</h3>
                  <p>
                    See how is the victor and who are the losers. The big stage
                    is where the winners bask in their own glory.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="view-onscroll" ref={containerRef}>
              <img className="animate" src="angular.svg" alt="" />
              <img className="animate" src="reactjs.svg" alt="" />
              <img className="animate" src="redux.svg" alt="" />

              <img className="animate" src="typescript.svg" alt="" />
              <img className="animate" src="js.svg" alt="" />
              <img className="animate" src="html-5.svg" alt="" />
              <img className="animate" src="css.svg" alt="" />
              <img className="animate" src="scss.svg" alt="" />
              <img className="animate" src="node-js.svg" alt="" />
              <img className="animate" src="mongodb.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-6"></div>
      </div>
      <div class="container laptop-container">
        <div class="laptop">
          <div class="laptop__screen">
            <div class="laptop__frame"></div>
            <div class="laptop__display">
              {/* <svg
                class="waves"
                preserveAspectRatio="none"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#006db0" d="M0 0h1920v1080H0z" />
                <path
                  d="M0 1080V180c125-6 250-12 344 3s158 51 271 45 274-54 374-68 138 6 240 10 268-7 394-8 211 9 297 18v900Z"
                  fill="#2890cc"
                />
                <path
                  d="M0 1080V360c122-2 243-4 351 19s201 71 283 47 153-120 275-129 294 69 401 75 147-62 238-76 231 25 372 64v720Z"
                  fill="#b9d1f3"
                />
                <path
                  d="M0 1080V540c91 20 183 41 300 37s261-31 376-58 201-54 309-30 239 98 353 114 211-28 305-48 186-18 277-15v540Z"
                  fill="#faa243"
                />
                <path
                  d="M0 1080V720c97 10 193 19 311 17s257-17 355-14 154 24 265 35 278 12 394-10 183-67 274-76 206 20 321 48v360Z"
                  fill="#fa535a"
                />
                <path
                  d="M0 1080V900c94-24 187-48 314-55s287 3 383 26 129 60 215 46 224-78 347-82 232 52 340 73 214 6 321-8v180Z"
                  fill="#9e3384"
                />
              </svg> */}
              <div class="headlines">
                <div className="clients">
                  <img src="lexus.svg" alt="" />
                  <img src="toyota.svg" alt="" />
                  <img src="Logo_Corte_Ingles.svg" alt="" />
                  <img src="mutua.jpg" alt="" />
                  <img id="telefonica-logo" src="telefonica-5.svg" alt="" />
                </div>
                <div className="text-content">
                  <h3 className="title">Hola, soy Carlos Lores</h3>
                  <p className="text-laptop">
                    desarrollador frontend con experiencia en la creación de
                    interfaces interactivas y optimizadas. Me especializo en
                    [React/Vue, CSS moderno, animaciones] y disfruto trabajar en
                    proyectos donde el diseño y la funcionalidad van de la mano.
                    Creo en escribir código limpio, accesible y eficiente.
                    Cuando no estoy programando, me encanta [hobby o interés
                    relacionado]. ¿Tienes un proyecto en mente? ¡Conversemos!
                  </p>
                  <button className="btn btn-primary">Hire</button>
                </div>
              </div>
            </div>
          </div>
          <div class="laptop__controls">
            <div class="laptop__keyboard"></div>
            <div class="laptop__touchpad"></div>
          </div>
          <div class="laptop__depth"></div>
          <div class="laptop__shadow"></div>
          <div id="smartphone">
            <div id="phone-wrapper" class="phone-wrapper new-iphone">
              <img
                class="active"
                id="new-iphone-frame"
                src="new-iphone-mock.png"
                alt=""
              />
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
