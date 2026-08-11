import './contact.scss';

const Contact = () => {
    return (
        <section className="section--contact" id="contact">
            <div className="container">
                <div className="main-container">
                    <h2>hablemos</h2>
                    <div><p>
                        Busco un sitio donde el front se cuide de verdad. Si tienes un proyecto entre manos o una vacante, escríbeme y lo vemos.
                    </p>
                        <div className="wrap-buttons">
                            <a href="https://www.linkedin.com/in/carlos-lores-h/" target="_blank" className="primary">LinkedIn <span>↗</span></a>
                            <a href="https://github.com/carloslores/" target="_blank" className="secondary">GitHub <span>↗</span></a>
                        </div>
                    </div>
                </div>
                <div className="footer-container"><span>© 2026 Carlos Lores</span><span>Frontend Developer · Madrid</span>
                    <a data-dc-tpl="258" href="#top">Volver arriba ↑</a></div>

            </div>
        </section>
    );
};

export default Contact;