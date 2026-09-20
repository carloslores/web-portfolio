import './contact.scss';
import { useGlobal } from "../contexts/GlobalContext";

const Contact = () => {
    const { t } = useGlobal();
    const contact = t?.contact || {};

    return (
        <section className="section--contact" id="contact">

            <div className="container">
                <div className="pretitle" data-reveal="1">
                    {contact.pretitle}
                </div>
                <div className="main-container">
                    <h2 data-reveal="1">{contact.title}</h2>
                    <div><p data-reveal="1">
                        {contact.description}
                    </p>
                        <div className="wrap-buttons">
                            <a data-reveal="1" href="https://www.linkedin.com/in/carlos-lores-h/" target="_blank" rel="noreferrer" className="primary">{contact.linkedin} <span>↗</span></a>
                            <a data-reveal="1" href="https://github.com/carloslores/" target="_blank" rel="noreferrer" className="secondary">{contact.github} <span>↗</span></a>
                        </div>
                    </div>
                </div>
                <div className="footer-container"><span data-reveal="1">{contact.copyright}</span><span data-reveal="1">{contact.subtitle}</span>
                    <a data-reveal="1" data-dc-tpl="258" href="#top">{contact.backToTop}</a></div>

            </div>
        </section>
    );
};

export default Contact;
