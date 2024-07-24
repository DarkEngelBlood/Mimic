import cart from "../assets/cart2.png";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="Carrito de compras" className={styles.cart} />
      <span className={styles.span}>25</span>
    </>
  );
};
