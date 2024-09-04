import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <div >
        <h1>Mimic</h1>
        <h2 >Albertito</h2>
        <ul >
          <li >
            <Link as={NavLink} to="/" >
              Inicio
            </Link>
          </li>
          <li >
            <Link as={NavLink} to="/category/Figura" >
              Figuras
            </Link>
          </li>
          <li >
            <Link as={NavLink} to="/category/Manga" >
              Mangas
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </>
  );
};
