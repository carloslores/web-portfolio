import { useEffect, useRef } from "react";
import "./projects.scss";

const projects = [
  {
    link: "https://esimflag.com/",
    image: "/esimflag.png",
    logo: "toyota_logo.svg",
    enterprise: "Esimflag",
    title: "Toyota VO",
    tech: ["react", "html", "css"],
    description: "Listado con filtros combinables, comparador y ficha de vehículo. Estado de búsqueda sincronizado con la URL para poder compartir resultados.",
  },
  {
    link: "https://www.toyota.es/coches-segunda-mano",
    image: "/toyota-light.png",
    logo: "toyota_logo.svg",
    enterprise: "Toyota",
    title: "Toyota VO",
    tech: ["react", "html", "css"],
    description: "Listado con filtros combinables, comparador y ficha de vehículo. Estado de búsqueda sincronizado con la URL para poder compartir resultados.",
  },
  {
    link: "https://www.lexusauto.es/lexus-seminuevos",
    image: "/lexus.png",
    logo: "lexus-logo-silver.png",
    enterprise: "Lexus",
    title: "Lexus VO",
    tech: ["react", "html", "css"],
  },
  {
    link: "https://www.financieraelcorteingles.es/es/solicitar-tarjeta/evolve-onboarding/wizard/step1/welcome",
    image: "/eci-financiera.png",
    logo: "Logo_Corte_Ingles.svg",
    enterprise: "El Corte Inglés",
    title: "Evolve",
    tech: ["node", "typescript", "html", "css"],
  },
  {
    link: "https://www.mutua.es/seguros-coche/calcular/chat/",
    image: "/mutua-madrilena.png",
    logo: "mutua-logo.png",
    enterprise: "Mutua",
    title: "Cotizador",
    tech: ["angular", "typescript", "html", "css"],
  },
  {
    link: "https://www.mutua.es/fondo-inversion-mas-rentables/",
    image: "/mutuactivos.png",
    logo: "mutua-logo.png",
    enterprise: "Mutua",
    title: "Fondos de inversión",
    tech: ["angular", "typescript", "html", "css"],
  },
  {
    link: "https://www.superefectivo.com/",
    image: "/superefectivo.png",
    logo: "superefectivo.png",
    enterprise: "Superefectivo",
    title: "Superefectivo",
    tech: ["js", "html", "css"],
  },
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const timeoutIds = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const timeoutId = setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200);

            timeoutIds.push(timeoutId);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    for (const el of projectRefs.current) {
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const id of timeoutIds) clearTimeout(id);
    };
  }, []);
  return (
    <section id="projects">

      <div className="container extra-left-padding p-0-md-right">
        <h2>
          cosas que
          <br />
          he construido

        </h2>

        <div className="projects-container">
          {projects.map((project, i) => (

            <div
              className="align-items-center fade-in-up p-y-2"
              key={project.link || project.title}
              ref={(el) => (projectRefs.current[i] = el)}
            //style={i % 2 === 0 ? { marginLeft: "10rem" } : {}}
            >
              <article className="card-project-container">

                <div className="card-image-container">
                  <img src={process.env.PUBLIC_URL + project.image} className="card__image" alt="" />
                  <h3>{project.title} <span>{'>'}</span></h3>

                </div>
                {/* <div className="info-project-container">
                  <div className="d-flex align-items-center">
                    <span className="enterprise-name">{project.enterprise}</span>
                    <span className="line-project"></span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-container">

                    {project.tech.map((icon, index) => (
                      <span className="tech-icon" key={index} >{icon}</span>
                    ))}
                  </div>
                </div> */}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
