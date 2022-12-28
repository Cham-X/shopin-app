import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./CartContainer.module.css";

function CartContainer() {
  const { cartItems, clearCart } = useGlobalContext();

  function getTotalPrice() {
    return cartItems.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
  }
  if (cartItems.length === 0) {
    return (
      <section className={styles.cartSection}>
        <header>
          <h2 className={styles.cartHeader}>Shopping Cart</h2>
        </header>
        <div className={styles.emptyCart}>
          <h2>Your cart is empty</h2>
          <Button href="product" page="start Shopping" />
        </div>
      </section>
    );
  }
  return (
    <section className={styles.cartSection}>
      <header>
        <h2 className={styles.cartHeader}>Shopping Cart</h2>
      </header>

      <div className={styles.cartTableHeader}>
        <h4>ProductImage</h4>
        <h4>ProductName</h4>
        <h4>price</h4>
        <h4>Quantity</h4>
        <h4 className={styles.cartAmount}>Amount</h4>
        <h4></h4>
      </div>
      <hr />
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <footer className={styles.cartFooter}>
        <div className={styles.cartBtn}>
          <div onClick={() => clearCart()}>
            <Button href="cart" page="clear all" />
          </div>
          <div>
            <Button href="product" page="continue shopping" />
          </div>
        </div>
        <div>
          <h2>Grand Total : ${ getTotalPrice()}</h2>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
