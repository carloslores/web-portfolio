import React, { useEffect, useRef } from "react";
import "./RailWrap.scss";
import About from "../../sections/about";
import Projects from "../../sections/projects";
import HowIWork from "../../sections/howIWork";
import TechStack from "../../sections/techStack";
import Contact from "../../sections/contact";
import { useGlobal } from "../../contexts/GlobalContext";



const ids = ['welcome', 'about', 'projects', 'services', 'contact'];

const RailWrap = ({ showClients = true, showStack = true }) => {
    const rootRef = useRef(null);
    const { showCoder, setShowCoder } = useGlobal();

    // filter puede llamarse desde el JSX, por lo que vive fuera del effect
    const filter = (e) => {
        const el = rootRef.current;
        const tag = e.currentTarget.getAttribute('data-tag');
        if (!el) return;
        el.querySelectorAll('[data-filters] button').forEach((b) => {
            const on = b.getAttribute('data-tag') === tag;
            b.style.background = on ? '#d4372f' : 'transparent';
            b.style.borderColor = on ? '#d4372f' : '#3a382f';
        });
        let shown = 0;
        el.querySelectorAll('[data-card]').forEach((c) => {
            const tags = (c.getAttribute('data-tags') || '').split(' ');
            const match = tag === 'all' || tags.indexOf(tag) !== -1;
            c.style.display = match ? 'flex' : 'none';
            if (match) shown++;
        });
        const empty = el.querySelector('[data-empty]');
        if (empty) empty.style.display = shown ? 'none' : 'block';
    };

    const elementoActivoRef = useRef('');

    useEffect(() => {
        const manejarScroll = () => {
            // 1. Recorremos los IDs de tus elementos
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;

                // 2. Obtenemos la posición del elemento respecto a la pantalla
                const posicion = el.getBoundingClientRect();
                if (el.id === "projects") {
                    setShowCoder(true)
                } else {
                    setShowCoder(false)
                }

                // 3. Si la parte superior del elemento cruzó el límite (ej. top 100px)
                // y su parte inferior aún no ha salido por arriba, es el elemento activo
                if (posicion.top <= 100 && posicion.bottom > 100) {
                    elementoActivoRef.current = id;
                    break; // Detiene el bucle al encontrar el primero visible
                }
            }
        };

        // Escuchamos el evento scroll del objeto window
        window.addEventListener('scroll', manejarScroll);

        // Ejecutamos una vez al cargar para detectar la sección inicial
        manejarScroll();

        // Limpiamos el evento al desmontar el componente
        return () => window.removeEventListener('scroll', manejarScroll);
    }, [setShowCoder]);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return undefined;

        const timeoutIds = [];

        // ── setupReveal ──────────────────────────────────────────────────────
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    entry.target.style.filter = 'none';
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

        const nodes = el.querySelectorAll('[data-reveal]');
        let nodeIdx = 0;
        for (const n of nodes) {
            const below = n.getBoundingClientRect().top > window.innerHeight * 0.9;
            if (below) {
                n.style.opacity = '0';
                n.style.transform = 'translateY(34px)';
                n.style.filter = 'blur(4px)';
                n.style.transition =
                    'opacity .75s ease ' + ((nodeIdx % 3) * 0.07) + 's, ' +
                    'transform .75s cubic-bezier(.2,.7,.2,1) ' + ((nodeIdx % 3) * 0.07) + 's, ' +
                    'filter .75s ease';
            }
            nodeIdx++;
            observer.observe(n);
        }

        // ── setupScroll ──────────────────────────────────────────────────────
        const q = (s) => el.querySelector(s);
        const nav = q('[data-nav]');
        const bar = q('[data-progress]');
        const wrap = el;
        const railPath = q('[data-rail-path]');
        const dot = q('[data-rail-dot]');
        const heroImg = q('[data-par]');
        const ribbon = q('[data-ribbon]');
        const track = q('[data-ribbon-track]');
        const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
        let ticking = false;

        const update = () => {
            ticking = false;
            const y = window.scrollY || window.pageYOffset;
            const vh = window.innerHeight;

            el.querySelectorAll('[data-reveal]').forEach((n) => {
                if (n.style.opacity === '' || n.style.opacity === '1') return;
                if (n.getBoundingClientRect().top < vh) {
                    n.style.opacity = '1';
                    n.style.transform = 'none';
                    n.style.filter = 'none';
                }
            });

            if (nav) {
                const on = y > 40;
                nav.style.background = on ? 'rgba(236,234,228,.82)' : 'transparent';
                nav.style.backdropFilter = on ? 'blur(16px)' : 'none';
                nav.style.webkitBackdropFilter = on ? 'blur(16px)' : 'none';
                nav.style.borderBottomColor = on ? '#d6d2c7' : 'transparent';
            }

            if (bar) {
                const max = document.documentElement.scrollHeight - vh;
                bar.style.width = (max > 0 ? clamp(y / max, 0, 1) * 100 : 0) + '%';
            }

            if (heroImg) {
                heroImg.style.transform = 'translate3d(0,' + (-clamp(y, 0, vh) * 0.075).toFixed(1) + 'px,0)';
            }

            if (ribbon && track) {
                const r = ribbon.getBoundingClientRect();
                if (r.bottom > -200 && r.top < vh + 200) {
                    const half = track.scrollWidth / 2 || 1;
                    const shift = ((y * 0.45) % half);
                    track.style.transform = 'translate3d(' + (-shift).toFixed(1) + 'px,0,0)';
                }
            }

            if (wrap && railPath && dot && getComputedStyle(dot.parentNode).display !== 'none') {
                const r = dot.parentNode.getBoundingClientRect();
                const p = clamp((vh * 0.55 - r.top) / (r.height || 1), 0, 1);
                railPath.style.strokeDashoffset = String(1 - p);
                if (p > 0.001 && p < 0.999) {
                    const len = railPath.getTotalLength();
                    const pt = railPath.getPointAtLength(len * p);
                    const x = (pt.x / 100) * r.width;
                    const yy = (pt.y / 1000) * r.height;
                    const tilt = ((pt.x - 50) / 50) * 8;
                    dot.style.opacity = '1';
                    dot.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + yy.toFixed(1) + 'px,0) rotate(' + tilt.toFixed(2) + 'deg)';
                } else {
                    dot.style.opacity = '0';
                }
            }
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            for (const id of timeoutIds) clearTimeout(id);
        };
    }, [setShowCoder]);

    return (
        <div ref={rootRef} data-railwrap="1" style={{ position: "relative" }}>
            <div data-rail="1" aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "240px", pointerEvents: "none", zIndex: 6 }}>
                <svg viewBox="0 0 100 1000" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
                    <path d="M 50 0 C 78 60, 22 112, 50 172 S 82 262, 44 334 S 20 432, 58 504 S 80 604, 40 674 S 20 782, 54 854 S 76 934, 50 1000" fill="none" stroke="rgba(212,55,47,.22)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                    <path data-rail-path="1" d="M 50 0 C 78 60, 22 112, 50 172 S 82 262, 44 334 S 20 432, 58 504 S 80 604, 40 674 S 20 782, 54 854 S 76 934, 50 1000" fill="none" stroke="#d4372f" strokeWidth="2.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" vectorEffect="non-scaling-stroke" />
                </svg>

                {!showCoder ?
                <div data-rail-dot="1" className="test" style={{ position: "absolute", top: 0, left: "57px", width: "132px", height: "auto", margin: "-106px 0 0 -66px", opacity: 0, filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }}>
                        <img src={process.env.PUBLIC_URL + "/brain.png"} alt="" style={{ position: "absolute", top: 0, left: 0, width: "132px", height: "auto", margin: "-106px 0 0 -66px", filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }} />
                    </div>
                    :
                    <div data-rail-dot="1" className="test" style={{ position: "absolute", top: 0, left: "57px", width: "132px", height: "auto", margin: "-106px 0 0 -66px", opacity: 0, filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }} >

                        <img className="fire"
                            src={process.env.PUBLIC_URL + "/fire.gif"}
                            alt=""
                            style={{ position: "absolute", margin: "-106px 0 0 -66px", filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }}
                        />
                        <img className="smoke" src={process.env.PUBLIC_URL + "/smoke.gif"} alt="" style={{ position: "absolute", height: "auto", margin: "-106px 0 0 -66px", filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }} />
                        <img className="eyes vibrate" src={process.env.PUBLIC_URL + "/eyes.png"} alt="" style={{ position: "absolute", top: 0, height: "auto", margin: "-106px 0 0 -66px", filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }} />
                        <img
                            src={process.env.PUBLIC_URL + "/coder-down.png"}
                            alt=""
                            style={{ position: "absolute", top: 0, left: 0, width: "132px", height: "auto", margin: "-106px 0 0 -66px", filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease" }}
                        />
                    </div>

                }

            </div>
            <About />
            <div data-dc-tpl="84" data-ribbon="1" data-sec="1" style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "34px 0px 34px 88px", borderTop: "1px solid rgb(214, 210, 199)", borderBottom: "1px solid rgb(214, 210, 199)" }}>
                <div data-dc-tpl="85" data-ribbon-track="1" style={{ display: "inline-flex", alignItems: "center", gap: "44px", fontFamily: "Anton, sans-serif", textTransform: "lowercase", fontSize: "clamp(38px, 6.5vw, 92px)", lineHeight: "1", color: "rgb(22, 21, 15)", transform: "translate3d(-720px, 0px, 0px)" }}>
                    <span data-dc-tpl="86">react</span><span data-dc-tpl="87" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="88">angular</span><span data-dc-tpl="89" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="90">typescript</span><span data-dc-tpl="91" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="92">animación</span><span data-dc-tpl="93" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="94">rendimiento</span><span data-dc-tpl="95" style={{ color: "rgb(212, 55, 47)" }}>/</span>
                    <span data-dc-tpl="96">react</span><span data-dc-tpl="97" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="98">angular</span><span data-dc-tpl="99" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="100">typescript</span><span data-dc-tpl="101" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="102">animación</span><span data-dc-tpl="103" style={{ color: "rgb(212, 55, 47)" }}>/</span><span data-dc-tpl="104">rendimiento</span><span data-dc-tpl="105" style={{ color: "rgb(212, 55, 47)" }}>/</span>
                </div>
            </div>
            <svg width="100%" height="100%" viewBox="0 0 2429 144" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "2rem" }}>
                <g clipPath="url(#clip0_213_2780)">
                    <g filter="url(#filter0_g_213_2780)">
                        <path d="M2437.6 112.1L2381.6 112.3C1606.8 115.3 854.4 122.3 463.2 126L445.2 126.1C59.8 129.7 52.1 129.7 44.6 129.7H-11.4V17.7H44.6C51.4 17.7 58.2 17.7 444.1 14.2L462.2 14C853.3 10.3 1606 3.3 2381.2 0.3L2437.2 0.1L2437.6 112.1Z" fill="rgb(22, 21, 15)" />
                    </g>
                    <rect x="0" y="46" width="100%" height="100%" fill="rgb(22, 21, 15)"></rect>
                </g>
                <defs>
                    <filter id="filter0_g_213_2780" x="0" y="-13.9" width="2477.1" height="157.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="3" seed="3267"></feTurbulence>
                        <feDisplacementMap in="shape" scale="28" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%"></feDisplacementMap>
                        <feMerge result="effect1_texture_213_2780">
                            <feMergeNode in="displacedImage"></feMergeNode>
                        </feMerge>
                    </filter>
                    <clipPath id="clip0_213_2780">
                        <rect width="2429" height="144" fill="rgb(22, 21, 15)"></rect>
                    </clipPath>
                </defs>
            </svg>
            <Projects />
            <HowIWork />
            <TechStack />
            <div style={{ color: "rgb(22, 21, 15)", marginBottom: "-3rem", inset: "auto -3rem 0%", width: "100%", marginTop: "-2rem" }}>
                <svg width="100%" height="100%" viewBox="0 0 2429 144" fill="rgb(22, 21, 15)" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_213_2781)">
                        <g filter="url(#filter0_g_213_2781)">
                            <path d="M-8.6 31.9L47.4 31.7C822.2 28.7 1574.6 21.7 1965.8 18L1983.8 17.9C2369.2 14.3 2376.9 14.3 2384.4 14.3H2440.4V126.3H2384.4C2377.6 126.3 2370.8 126.3 1984.9 129.9L1966.8 130C1575.7 133.7 823 140.7 47.8 143.7L-8.2 143.9L-8.6 31.9Z" fill="rgb(22, 21, 15)"></path>
                        </g>
                        <rect x="0" y="98" width="2449" height="98" transform="rotate(-180 2440 98)" fill="rgb(22, 21, 15)currentColor"></rect>
                    </g>
                    <defs>
                        <filter id="filter0_g_213_2781" x="0" y="0.254883" width="2477.05" height="157.656" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feTurbulence type="fractalNoise" baseFrequency="0.0099999997764825821 0.0099999997764825821" numOctaves="3" seed="3267"></feTurbulence>
                            <feDisplacementMap in="shape" scale="28" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%"></feDisplacementMap>
                            <feMerge result="effect1_texture_213_2781">
                                <feMergeNode in="displacedImage"></feMergeNode>
                            </feMerge>
                        </filter>
                        <clipPath id="clip0_213_2781">
                            <rect width="2429" height="144" fill="rgb(22, 21, 15)" transform="translate(2429 144) rotate(-180)"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <Contact />

        </div>
    );
};

export default RailWrap;
