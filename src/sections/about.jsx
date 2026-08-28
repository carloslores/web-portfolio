import "./about.scss";

const About = () => {

  return (
    <section id="about" className="container container-padding" style={{ height: "100vh" }}>
      <div className="col-8 col-md-12">
        <div className="pretitle">
          01 — Sobre mí
        </div>
        <h2>
          ¿quién dijo que el front era solo maquetar?
        </h2>
        <div className="d-flex more-info">
          <p>Trabajo en producto real, no en demos. He desarrollado el buscador de vehículo de ocasión de Lexus y Toyota, el simulador de ahorro e inversión de Mutua Madrileña y piezas de El Corte Inglés. Proyectos con tráfico de verdad, con diseño de verdad y con plazos de verdad.</p>
          <p>Me formé en Ironhack y desde entonces no he parado de trastear: React y Angular en el día a día, TypeScript siempre que puedo, y un interés casi obsesivo por que las cosas se sientan rápidas. Si algo tarda 300 ms de más, me entero.</p>
        </div>
        <div className="extra-content col-md-12">

          <div data-dc-tpl="75" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s 0.07s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) 0.07s, filter 0.75s" }}>
            <div data-dc-tpl="76" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>6+</div>
            <div data-dc-tpl="77" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>Proyectos en producción</div>
          </div>

          <div data-dc-tpl="78" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s 0.14s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) 0.14s, filter 0.75s" }}>
            <div data-dc-tpl="79" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>5</div>
            <div data-dc-tpl="80" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>Marcas grandes</div>
          </div>

          <div data-dc-tpl="81" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.75s" }}>
            <div data-dc-tpl="82" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>100%</div>
            <div data-dc-tpl="83" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>Responsive, sin excusas</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
