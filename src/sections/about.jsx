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
              <img className="animate" src="reactjs.svg" alt="" />
              <img className="animate" src="redux.svg" alt="" />
              <img className="animate" src="angular.svg" alt="" />
              <img className="animate" src="html-5.svg" alt="" />
              <img className="animate" src="typescript.svg" alt="" />
              <img className="animate" src="js.svg" alt="" />
              <img className="animate" src="scss.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-6">
          <p>
            Hola, soy Carlos Lores, desarrollador frontend con experiencia en la
            creación de interfaces interactivas y optimizadas. Me especializo en
            [React/Vue, CSS moderno, animaciones] y disfruto trabajar en
            proyectos donde el diseño y la funcionalidad van de la mano. Creo en
            escribir código limpio, accesible y eficiente. Cuando no estoy
            programando, me encanta [hobby o interés relacionado]. ¿Tienes un
            proyecto en mente? ¡Conversemos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
