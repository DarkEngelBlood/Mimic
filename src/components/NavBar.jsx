import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"
import styles from "./Navbar.module.css"

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <h1>Mimic</h1>
      </div>
      <div className={styles.navLinks}>
        <ul className={styles.ul}>
          <NavLink to="/" className={`${({ isActive }) => (isActive ? styles.active : styles.navLink)} ${styles.homeNav}`}>
            <p className={styles.home}>Inicio</p>
          </NavLink>
          <li className={styles.list}>
            <div className={styles.dropdown}>
              <div className={styles.dropdownButton}>
                Categorías
              </div>
              <div className={styles.dropdownContent}>
                <NavLink to="/category/Figura" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
                  Figuras
                </NavLink>
                <NavLink to="/category/Manga" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
                  Mangas
                </NavLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.cart}>
        <CartWidget />
      </div>
    </nav>
  )
}
