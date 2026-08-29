import "./techStack.scss";
import { useGlobal } from "../contexts/GlobalContext";

const stackLogos = [
    { name: "React", logo: "/reactjs.svg" },
    { name: "Angular", logo: "/angular.svg" },
    { name: "TypeScript", logo: "/typescript-logo-svgrepo-com.svg" },
    { name: "HTML", logo: "/html-5.svg" },
    { name: "CSS", logo: "/css.svg" },
    { name: "JavaScript", logo: "/js.svg" },
    { name: "next.js", logo: "/nextjs.svg" },
    { name: "Node", logo: "/node-js.svg" },
    { name: "Git", logo: "/git.svg" },
];

const stackAI = [
    { name: "Claude code", logo: "/claude-code.svg" },
    { name: "Openia", logo: "/openai.svg" },
    { name: "Gemini", logo: "/gemini.svg" },
    { name: "Claude", logo: "/claude.svg" },
    { name: "Antigravity", logo: "/antigravity.svg" },
];

const TechStack = () => {
    const { t } = useGlobal();
    const techStack = t?.techStack || {};

    return (
        <section className="section--techStack" id="techStack">
            <div className="pretitle">
                {techStack.pretitle}
            </div>
            <div className="stack-container">
                {stackLogos.map((logo) => (
                    <div className="stack-card" key={logo.name}>
                        <img src={process.env.PUBLIC_URL + logo.logo} alt={`Logo de la tecnología ${logo.name}`} />
                        <span>{logo.name}</span>
                    </div>
                ))}
            </div>
            <div className="stack-container p-y-5">
                {stackAI.map((logo) => (
                    <div className="stack-card" key={logo.name}>
                        <img src={process.env.PUBLIC_URL + logo.logo} alt={`Logo de herramienta de IA ${logo.name}`} />
                        <span>{logo.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
