import { useEffect, useRef } from "react";
import "./projects.scss";

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Agrega clase visible con retardo basado en índice
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200); // desfase de 200ms por cada tarjeta
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section id="projects">
      <div className="p-relative" style={{ top: "0" }}>
        <div className="custom-shape-divider-top-1743330679">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container">
        <h2>Proyectos en los que he participado</h2>
        {/* <div className="row">
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.toyota.es/coches-segunda-mano"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img src="toyota-vo.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src="toyota_logo.svg" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="reactjs.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              <a
                href="https://www.toyota.com/espanol/payment-estimator/"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img src="toyota-cal-card.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src="toyota_logo.svg" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="reactjs.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-6 align-items-center">
            <div className="card-container">
              <a
                href="https://www.lexusauto.es/lexus-seminuevos"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img src="lexus-vo-card.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>

                    <img
                      className="card__thumb"
                      alt=""
                      src="lexus-logo-silver.png"
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">Lexus VO</h3>
                      <span className="card__status"></span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="reactjs.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>

                  <p className="card__description">
                    App de vehículos de ocación de Lexus
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.financieraelcorteingles.es/es/solicitar-tarjeta/evolve-onboarding/wizard/step1/welcome"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="corte-ingles-card.png"
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src="Logo_Corte_Ingles.svg"
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="node-js.svg" />
                      <img className="" alt="" src="typescript.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.mutua.es/seguros-coche/calcular/chat/"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="cotizador-motor-card.png"
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src="mutua-logo.png" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="angular.svg" />
                      <img className="" alt="" src="typescript.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="scss.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.mutua.es/fondo-inversion-mas-rentables/"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img src="mutua-ahorro.png" className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src="mutua-logo.png" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="js.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.re-group.es/"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="proyecto_regroup.jpg"
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src="_re-logo.svg" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="js.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="card-container">
              {" "}
              <a
                href="https://www.superefectivo.com/"
                className="card"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="superefectivo-card.png"
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb superefectivo"
                      src="superefectivo.png"
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">kim Cattrall</h3>
                      <span className="card__status">3 hours ago</span>
                    </div>
                    <div className="icons-tech">
                      <img className="" alt="" src="js.svg" />
                      <img src="html-5.svg" alt="" />
                      <img src="css.svg" alt="" />
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing edivt.
                    Asperiores, blanditiis?
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div> */}
        <div className="row">
          {[
            {
              link: "https://www.toyota.es/coches-segunda-mano",
              image: "toyota-vo.png",
              logo: "toyota_logo.svg",
              title: "Toyota VO",
              tech: ["reactjs.svg", "html-5.svg", "css.svg"],
            },
            {
              link: "https://www.toyota.com/espanol/payment-estimator/",
              image: "toyota-cal-card.png",
              logo: "toyota_logo.svg",
              title: "Toyota Estimator",
              tech: ["reactjs.svg", "html-5.svg", "css.svg"],
            },
            {
              link: "https://www.lexusauto.es/lexus-seminuevos",
              image: "lexus-vo-card.png",
              logo: "lexus-logo-silver.png",
              title: "Lexus VO",
              tech: ["reactjs.svg", "html-5.svg", "css.svg"],
            },
            {
              link: "https://www.financieraelcorteingles.es/es/solicitar-tarjeta/evolve-onboarding/wizard/step1/welcome",
              image: "corte-ingles-card.png",
              logo: "Logo_Corte_Ingles.svg",
              title: "Evolve",
              tech: ["node-js.svg", "typescript.svg", "html-5.svg", "css.svg"],
            },
            {
              link: "https://www.mutua.es/seguros-coche/calcular/chat/",
              image: "cotizador-motor-card.png",
              logo: "mutua-logo.png",
              title: "Cotizador",
              tech: ["angular.svg", "typescript.svg", "html-5.svg", "scss.svg"],
            },
            {
              link: "https://www.mutua.es/fondo-inversion-mas-rentables/",
              image: "mutua-ahorro.png",
              logo: "mutua-logo.png",
              title: "Fondos de inversión",
              tech: ["angular.svg", "typescript.svg", "html-5.svg", "scss.svg"],
            },
            {
              link: "https://www.re-group.es/",
              image: "proyecto_regroup.jpg",
              logo: "_re-logo.svg",
              title: "Estudio de arquitectura",
              tech: ["reactjs.svg", "html-5.svg", "scss.svg"],
            },
            {
              link: "https://www.superefectivo.com/",
              image: "superefectivo-card.png",
              logo: "superefectivo.png",
              title: "Superefectivo",
              tech: ["js.svg", "html-5.svg", "css.svg"],
            },
            // ...añade más objetos aquí
          ].map((project, i) => (
            <div
              className="col-6 align-items-center fade-in-up"
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
            >
              <div className="card-container">
                <a
                  href={project.link}
                  className="card"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={project.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <div className="card__header-text">
                        <img
                          className="card__thumb"
                          src={project.logo}
                          alt=""
                        />
                        <h3 className="card__title">{project.title}</h3>
                      </div>
                      <div className="icons-tech">
                        {project.tech.map((icon, index) => (
                          <img key={index} src={icon} alt="proyecto" />
                        ))}
                      </div>
                    </div>

                    <p className="card__description">
                      Descripción del proyecto...
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
