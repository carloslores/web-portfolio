import "./Header.scss";

const Header = (params) => {
  const { scroll } = params;
  return (
    <nav className={`navbar${scroll ? " blur" : ""}`}>
      <div className="container-text-and-btn">
        <h3 className="heebo">portfolio<span className="red-text">.</span></h3>

      </div>
      <span className="links-container">
        <a href="#welcome">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a>Contact</a>
        <button className="btn btn-secondary">Hire</button>
      </span>
    </nav>
  );
};

export default Header;
