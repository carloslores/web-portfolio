import "./marquee.scss"

const LOGOS = [
    { src: "/lexus-logo.svg", alt: "Lexus", height: "26px" },
    { src: "/toyota-logo.svg", alt: "Toyota", height: "34px" },
    { src: "/mutua-logo.png", alt: "Mutua Madrileña", height: "30px" },
    { src: "/telefonica.svg", alt: "Telefónica", height: "30px" },
    { src: "/Logo_Corte_Ingles.svg", alt: "El Corte Inglés", height: "30px" },
    { src: "/superefectivo-logo.png", alt: "Superefectivo", height: "26px" },
];

const Marquee = () => {
    return (
        <section id="marquee-clients" className="container" data-dc-tpl="60" style={{ borderTop: "1px solid rgb(214, 210, 199)", borderBottom: "1px solid rgb(214, 210, 199)", padding: "30px 0px", overflow: "hidden" }}>
            <div data-dc-tpl="61" data-marqlabel="1" className="title-brands-clients" >
                Marcas para las que he desarrollado
            </div>
            <div
                style={{
                    overflow: "hidden",
                    WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0.5) 100%)",
                    maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 8%, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0.5) 100%)"
                }}
            >
                <div data-dc-tpl="62" data-marquee="1" style={{ display: "flex", width: "max-content", animation: "35s linear 0s infinite normal none running cl-marquee" }}>
                    {[0, 1, 2, 3].map((groupIndex) => (
                        <div
                            key={groupIndex}
                            aria-hidden={groupIndex > 0 ? "true" : undefined}
                            style={{ display: "flex", alignItems: "center", gap: "76px", paddingRight: "76px" }}
                        >
                            {LOGOS.map((logo, logoIndex) => (
                                <img
                                    key={logoIndex}
                                    src={process.env.PUBLIC_URL + logo.src}
                                    alt={groupIndex === 0 ? logo.alt : ""}
                                    style={{ height: logo.height, opacity: 1 }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;