import "./navbar/navbar.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <link to="/">
        <h3>Ecommerce</h3>
      </link>
      <div className="Categories">
        <NavLink
          to={`/category/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={`/category/tablet`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Tablets
        </NavLink>
        <NavLink
          to={`/category/notebook`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Notebooks
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
