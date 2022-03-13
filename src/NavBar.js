import { Link } from "react-router-dom";

const NavBar = () =>
{
  return (
    <nav className="navbar">
      <h1>Interview Creation Portal</h1>
      <div className="links">
        <Link to="/" class="home-btn"><a>Home</a></Link>
        <Link to="/schedule" class="red-btn"><a>
          Schedule New Interview
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;