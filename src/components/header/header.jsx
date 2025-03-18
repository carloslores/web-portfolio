import "./header.scss";
const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <h3 className="heebo">Portfolio.</h3>
        {/* <img src="profile.jpg" alt="" /> */}
      </div>
      <span className="links-container">
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <button className="btn btn-primary">Hire</button>
      </span>
    </nav>
  );
};

export default Header;
