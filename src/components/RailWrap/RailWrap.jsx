import React, { useEffect, useRef } from "react";
import "./RailWrap.scss";
import About from "../../sections/about";
import Timeline from "../../sections/timeline";

const RailWrap = ({ showClients = true, showStack = true }) => {
    const rootRef = useRef(null);

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

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;

        // ── setupReveal ──────────────────────────────────────────────────────
        let io = null;
        if ('IntersectionObserver' in window) {
            const nodes = el.querySelectorAll('[data-reveal]');
            io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                        entry.target.style.filter = 'none';
                        io.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

            nodes.forEach((n, i) => {
                const below = n.getBoundingClientRect().top > window.innerHeight * 0.9;
                if (below) {
                    n.style.opacity = '0';
                    n.style.transform = 'translateY(34px)';
                    n.style.filter = 'blur(4px)';
                    n.style.transition =
                        'opacity .75s ease ' + ((i % 3) * 0.07) + 's, ' +
                        'transform .75s cubic-bezier(.2,.7,.2,1) ' + ((i % 3) * 0.07) + 's, ' +
                        'filter .75s ease';
                }
                io.observe(n);
            });
        }

        // ── setupScroll ──────────────────────────────────────────────────────
        const q = (s) => el.querySelector(s);
        const nav = q('[data-nav]');
        const bar = q('[data-progress]');
        const wrap = el; // el propio rootRef ES data-railwrap
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
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (io) io.disconnect();
        };
    }, []);

    return (
        <div ref={rootRef} data-railwrap="1" style={{ position: "relative" }}>
            <div data-rail="1" aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "500px", pointerEvents: "none", zIndex: 6 }}>
                <svg viewBox="0 0 100 1000" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
                    <path d="M 50 0 C 78 60, 22 112, 50 172 S 82 262, 44 334 S 20 432, 58 504 S 80 604, 40 674 S 20 782, 54 854 S 76 934, 50 1000" fill="none" stroke="rgba(212,55,47,.22)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                    <path data-rail-path="1" d="M 50 0 C 78 60, 22 112, 50 172 S 82 262, 44 334 S 20 432, 58 504 S 80 604, 40 674 S 20 782, 54 854 S 76 934, 50 1000" fill="none" stroke="#d4372f" strokeWidth="2.5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" vectorEffect="non-scaling-stroke" />
                </svg>

                <img data-rail-dot="1" style={{ position: "absolute", top: 0, left: 0, width: "132px", height: "auto", margin: "-106px 0 0 -66px", opacity: 0, filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease", willChange: "transform" }} src={process.env.PUBLIC_URL + "/brain.png"} alt="" />
                <img
                    data-rail-dot="2"
                    src={process.env.PUBLIC_URL + "/coder-down.png"}
                    alt=""
                    style={{ position: "absolute", top: 0, left: 0, width: "132px", height: "auto", margin: "-106px 0 0 -66px", opacity: 0, filter: "drop-shadow(0 20px 26px rgba(0,0,0,.3))", transition: "opacity .45s ease", willChange: "transform" }}
                />
            </div>
            <About />
            <Timeline />
        </div>
    );
};

export default RailWrap;
