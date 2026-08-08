import "./techStack.scss";

const TechStack = () => {
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
    return (
        <section className="section--techStack" id="techStack">
            <div className="stack-container">
                {stackLogos.map((logo, index) => (
                    <div className="stack-card" key={index}>
                        <img src={process.env.PUBLIC_URL + logo.logo} alt="Stack Logo" />
                        <span>{logo.name}</span>
                    </div>
                ))}
            </div>
            <div className="stack-container p-y-5">
                {stackAI.map((logo, index) => (
                    <div className="stack-card" key={index}>
                        <img src={process.env.PUBLIC_URL + logo.logo} alt="Stack Logo" />
                        <span>{logo.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;