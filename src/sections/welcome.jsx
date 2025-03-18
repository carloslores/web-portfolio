import CardCode from "../components/CardCode/CardCode";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="container container-padding">
      <div className="welcome-section-container row">
        <div className="col-6 d-flex align-items-center">
          <div className="left">
            <h1>Carlos Lores</h1>
            <h2>I'm a Web Developer</h2>

            <p>
              As a skilled web developer, I am passionate about creating clean,
              efficient
            </p>
            <div className="hero-contact-container d-flex">
              <button className="btn btn-primary">Explore My Work</button>
              <div className="icons">
                <button className="btn btn-outline grow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#d4372f" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </button>
                <button className="btn btn-outline grow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#d4372f" }}
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <CardCode rigth={true}></CardCode>
            <CardCode left={true}></CardCode>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="welcome-home-img">
            <div className="img-box">
              <div className="img-item">
                <img className="profile-image" src="hero.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
