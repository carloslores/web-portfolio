import React from "react";
import "./projects.scss";

const Projects = () => {
  return (
    <section id="projects" style={{ height: "100vh" }}>
      {/* <div id="card-area">
        <div classNameName="wrapper">
          <div classNameName="box-area">
            <div classNameName="box">
              <img alt="" src="lexus-project.png" />
              <div classNameName="overlay">
                <h3>Mountaineering</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Neque modi explicabo libero ea nam. Quod.
                </p>
                <a href="#">Book Now</a>
              </div>
            </div>
            <div classNameName="box">
              <img alt="" src="toyota-project.png" />
              <div classNameName="overlay">
                <h3>Scuba Diving</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Neque modi explicabo libero ea nam. Quod.
                </p>
                <a href="#">Book Now</a>
              </div>
            </div>
            <div classNameName="box">
              <img alt="" src="superefctivo.png" />
              <div classNameName="overlay">
                <h3>Travel World</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Neque modi explicabo libero ea nam. Quod.
                </p>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="card-project">
        <img alt="" src="lexus-project.png" />
        {/* <p className="card-title">Card Title</p>
        <p className="card-des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          deleniti officia. Aliquam repellendus illum pariatur nesciunt dolor et
          natus consectetur repudiandae suscipit autem distinctio commodi vel
          sed, id inventore modi.
        </p> */}
        <p className="card-text">
          <span>View More</span>
          <svg
            className="arrow-icon"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            ></path>
          </svg>
        </p>
      </div>
    </section>
  );
};

export default Projects;
