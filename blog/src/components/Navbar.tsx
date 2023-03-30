import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">My Blog</h1>
      <ul className="navbar__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/list">Article List(今は機能せず)</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
