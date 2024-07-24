import { CartWidget } from "./CartWidget";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <h1>Mimic</h1>
          <ul className={styles.ul}>
            <li className={styles.list}>
              <a href="#"  className={styles.a}>Inicio</a>
            </li>
            <li className={styles.list}>
              <a href="#"  className={styles.a}>Productos</a>
            </li>
            <li className={styles.list}>
              <a href="#"  className={styles.a}>Contacto</a>
            </li>
          </ul>
      </div>
      <CartWidget />
    </>
  );
};
