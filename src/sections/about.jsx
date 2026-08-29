import "./about.scss";
import { useGlobal } from "../contexts/GlobalContext";

const About = () => {
  const { t } = useGlobal();
  const about = t?.about || {};
  const stats = about.stats || {};

  return (
    <section id="about" className="container container-padding" style={{ height: "100vh" }}>
      <div className="col-8 col-md-12">
        <div className="pretitle">
          {about.pretitle}
        </div>
        <h2>
          {about.title}
        </h2>
        <div className="d-flex more-info">
          <p>{about.paragraph1}</p>
          <p>{about.paragraph2}</p>
        </div>
        <div className="extra-content col-md-12">

          <div data-dc-tpl="75" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s 0.07s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) 0.07s, filter 0.75s" }}>
            <div data-dc-tpl="76" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>{stats.projects?.value}</div>
            <div data-dc-tpl="77" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>{stats.projects?.label}</div>
          </div>

          <div data-dc-tpl="78" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s 0.14s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1) 0.14s, filter 0.75s" }}>
            <div data-dc-tpl="79" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>{stats.brands?.value}</div>
            <div data-dc-tpl="80" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>{stats.brands?.label}</div>
          </div>

          <div data-dc-tpl="81" data-reveal="1" style={{ opacity: 1, transform: "none", filter: "none", transition: "opacity 0.75s, transform 0.75s cubic-bezier(0.2, 0.7, 0.2, 1), filter 0.75s" }}>
            <div data-dc-tpl="82" style={{ fontFamily: "Anton, sans-serif", fontSize: "56px", lineHeight: "1", color: "rgb(212, 55, 47)" }}>{stats.responsive?.value}</div>
            <div data-dc-tpl="83" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgb(138, 133, 120)", marginTop: "8px" }}>{stats.responsive?.label}</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
