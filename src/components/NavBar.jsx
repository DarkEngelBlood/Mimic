import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <h1>Mimic</h1>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <Link as={NavLink} to="/" className={styles.a}>
              Inicio
            </Link>
          </li>
          <li className={styles.list}>
            <Link as={NavLink} to="/category/Figura" className={styles.a}>
              Figuras
            </Link>
          </li>
          <li className={styles.list}>
            <Link as={NavLink} to="/category/Manga" className={styles.a}>
              Mangas
            </Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </>
  );
};
