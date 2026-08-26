import "./howIWork.scss";

const howIWork = () => {
    return (
        <section className="section--howIWork container extra-extra-left-padding" id="howIWork">
            <h2>por qué contar conmigo</h2>
            <div className="table-container">
                <div className="reason-num">01</div>
                <h3>maquetación que no se rompe</h3>
                <p>Grid, Flexbox y container queries. Si el diseñador cambia de idea o el texto crece el doble, el layout aguanta. Nada de píxeles clavados a mano.</p>
            </div>
            <div className="table-container">
                <div className="reason-num">02</div>
                <h3>componentes, no páginas</h3>
                <p>Pienso en sistemas. Un componente bien hecho se usa veinte veces y se toca una. Vengo de proyectos con equipos grandes donde eso marca la diferencia.</p>
            </div>
            <div className="table-container">
                <div className="reason-num">03</div>
                <h3>rendimiento desde el minuto uno</h3>
                <p>Bundle bajo control, imágenes servidas como toca y render sin saltos. El rendimiento no se arregla al final, se decide al empezar.</p>
            </div>
            <div className="table-container">
                <div className="reason-num">04</div>
                <h3>animación con un motivo</h3>
                <p> Me gusta el movimiento, pero solo cuando explica algo: de dónde viene un elemento, qué acaba de pasar, dónde estás. Lo demás sobra.</p>
            </div>
        </section>
    );
};

export default howIWork;