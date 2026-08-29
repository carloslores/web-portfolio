import './contact.scss';
import { useGlobal } from "../contexts/GlobalContext";

const Contact = () => {
    const { t } = useGlobal();
    const contact = t?.contact || {};

    return (
        <section className="section--contact" id="contact">

            <div className="container">
                <div className="pretitle">
                    {contact.pretitle}
                </div>
                <div className="main-container">
                    <h2>{contact.title}</h2>
                    <div><p>
                        {contact.description}
                    </p>
                        <div className="wrap-buttons">
                            <a href="https://www.linkedin.com/in/carlos-lores-h/" target="_blank" rel="noreferrer" className="primary">{contact.linkedin} <span>↗</span></a>
                            <a href="https://github.com/carloslores/" target="_blank" rel="noreferrer" className="secondary">{contact.github} <span>↗</span></a>
                        </div>
                    </div>
                </div>
                <div className="footer-container"><span>{contact.copyright}</span><span>{contact.subtitle}</span>
                    <a data-dc-tpl="258" href="#top">{contact.backToTop}</a></div>

            </div>
        </section>
    );
};

export default Contact;
