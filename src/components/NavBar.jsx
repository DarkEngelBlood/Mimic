import { CartWidget } from "./CartWidget";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <h1 className={styles.colorAqua}>Mimic</h1>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
};
