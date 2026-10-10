import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Trainers", path: "/trainers" },
  { name: "Membership", path: "/membership" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("fitcoreUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("fitcoreUser");
    closeMenu();
    navigate("/login", { replace: true });
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">F</div>

          <div className="logo-text">
            FIT<span>CORE</span>
          </div>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <div className="navbar-links-inner">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/membership"
              className="navbar-join"
              onClick={closeMenu}
            >
              <span>Join Now</span>
              <span className="join-arrow">↗</span>
            </Link>

            {user ? (
              <div className="navbar-user">
                <div className="navbar-user-avatar">
                  {user.name
                    ? user.name.charAt(0).toUpperCase()
                    : "U"}
                </div>

                <div className="navbar-user-info">
                  <span className="navbar-user-label">
                    MEMBER
                  </span>

                  <strong>
                    {user.name || user.email}
                  </strong>
                </div>

                <button
                  type="button"
                  className="navbar-logout"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="navbar-auth">
                <Link
                  to="/login"
                  className="navbar-login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="navbar-signup"
                  onClick={closeMenu}
                >
                  Sign Up
                  <span>↗</span>
                </Link>
              </div>
            )}

          </div>
        </nav>

        <button
          className={`mobile-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;