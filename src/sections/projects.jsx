import { useEffect, useRef } from "react";
import "./projects.scss";

const Projects = () => {
  const projectRefs = useRef([]);
  const projects = [
    {
      link: "https://www.toyota.es/coches-segunda-mano",
      image: "/toyota-vo.png",
      logo: "toyota_logo.svg",
      enterprise: "Toyota",
      title: "Toyota VO",
      tech: ["react", "html", "css"],
      description: "Listado con filtros combinables, comparador y ficha de vehículo. Estado de búsqueda sincronizado con la URL para poder compartir resultados.",
    },
    {
      link: "https://www.toyota.com/espanol/payment-estimator/",
      image: "/toyota-cal-card.png",
      logo: "toyota_logo.svg",
      enterprise: "Toyota",
      title: "Toyota Estimator",
      tech: ["react", "html", "css"],
      description: "Simulador paso a paso con validación en tiempo real y cálculo de cuota. Formularios complejos que no marean al usuario.",
    },
    {
      link: "https://www.lexusauto.es/lexus-seminuevos",
      image: "/lexus-vo-card.png",
      logo: "lexus-logo-silver.png",
      enterprise: "Lexus",
      title: "Lexus VO",
      tech: ["react", "html", "css"],
    },
    {
      link: "https://www.financieraelcorteingles.es/es/solicitar-tarjeta/evolve-onboarding/wizard/step1/welcome",
      image: "/corte-ingles-card.png",
      logo: "Logo_Corte_Ingles.svg",
      enterprise: "El Corte Inglés",
      title: "Evolve",
      tech: ["node", "typescript", "html", "css"],
    },
    {
      link: "https://www.mutua.es/seguros-coche/calcular/chat/",
      image: "/cotizador-motor-card.png",
      logo: "mutua-logo.png",
      enterprise: "Mutua",
      title: "Cotizador",
      tech: ["angular", "typescript", "html", "css"],
    },
    {
      link: "https://www.mutua.es/fondo-inversion-mas-rentables/",
      image: "/mutua-ahorro.png",
      logo: "mutua-logo.png",
      enterprise: "Mutua",
      title: "Fondos de inversión",
      tech: ["angular", "typescript", "html", "css"],
    },
    {
      link: "https://www.re-group.es/",
      image: "/proyecto_regroup.jpg",
      logo: "_re-logo.svg",
      enterprise: "Re-group",
      title: "Estudio de arquitectura",
      tech: ["react", "html", "css"],
    },
    {
      link: "https://www.superefectivo.com/",
      image: "/superefectivo-card.png",
      logo: "superefectivo.png",
      enterprise: "Superefectivo",
      title: "Superefectivo",
      tech: ["js", "html", "css"],
    },
  ]

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

      <div className="container">
        <div className="row">
          <div className="col-6 align-items-center">
            <h2>
              cosas que
              <br />
              he construido

            </h2>
          </div>
          <div className="col-6 align-items-center">
            <button className="btn-project-filter active">Todo</button>
            <button className="btn-project-filter">React</button>
            <button className="btn-project-filter">Angular</button>
            <button className="btn-project-filter">TypeScript</button>
            <button className="btn-project-filter">Ecommerce</button>
          </div>

        </div>

        <div className="projects-container">
          {projects.map((project, i) => (

            <div
              className="align-items-center fade-in-up p-y-5 "
              key={i}
              ref={(el) => (projectRefs.current[i] = el)}
            //style={i % 2 === 0 ? { marginLeft: "10rem" } : {}}
            >
              <article className="card-project-container">

                <div className="card-image-container">
                  <img src={process.env.PUBLIC_URL + project.image} className="card__image" alt="" />
                </div>
                <div className="info-project-container">
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
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
