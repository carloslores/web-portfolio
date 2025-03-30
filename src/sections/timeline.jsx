import { useEffect, useRef } from "react";
import "./timeline.scss";

const Timeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      const elements = containerRef.current.querySelectorAll(".animate");
      elements.forEach((el) => observer.observe(el));

      return () => elements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <section id="timeline">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div id="content">
              {/* <h1>Timeline Concept</h1> */}

              <ul className="timeline">
                <li className="event" data-date="2011">
                  <h3>Graduation</h3>
                  <p>Bachelor of Fine Arts</p>
                </li>
                <li className="event" data-date="2019">
                  <h3>Bootcamp</h3>
                  <p>Iron Hack graduated</p>
                </li>
                <li className="event" data-date="2019">
                  <h3>First frontend developer job</h3>
                  <p>
                    This is where it all goes down. You will compete head to
                    head with your friends and rivals. Get ready!
                  </p>
                </li>
                <li className="event" data-date="2021">
                  <h3>Closing Ceremony</h3>
                  <p>
                    See how is the victor and who are the losers. The big stage
                    is where the winners bask in their own glory.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 align-items-center">
            <div className="view-onscroll" ref={containerRef}>
              <img className="icon-tech animate" src="angular.svg" alt="" />

              <img className="icon-tech animate" src="reactjs.svg" alt="" />
              <img className="icon-tech animate" src="redux.svg" alt="" />

              <img className="icon-tech animate" src="typescript.svg" alt="" />
              <img className="icon-tech animate" src="js.svg" alt="" />
              <img className="icon-tech animate" src="html-5.svg" alt="" />
              <img className="icon-tech animate" src="css.svg" alt="" />
              <img className="icon-tech animate" src="scss.svg" alt="" />
              <img className="icon-tech animate" src="node-js.svg" alt="" />
              <img className="icon-tech animate" src="mongodb.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="col-6"></div>
      </div>
    </section>
  );
};

export default Timeline;
