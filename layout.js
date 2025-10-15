import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const navStyle = {
    background: "linear-gradient(to right, #fdf6f0, #fbead1)",
    padding: "30px 0",
    borderBottom: "2px solid #e0cfc2",
    fontFamily: "'Raleway', sans-serif",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#8b3e3e",
    fontSize: "1.3rem",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "color 0.3s ease",
    fontFamily: "'Playfair Display', serif",
  };



  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/breakfast" style={linkStyle}>Breakfast</Link>
          </li>
          <li>
            <Link to="/lunch" style={linkStyle}>Lunch</Link>
          </li>
          <li>
            <Link to="/dinner" style={linkStyle}>Dinner</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;

