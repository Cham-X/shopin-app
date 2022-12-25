import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button"
import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./CartContainer.module.css"

function CartContainer() {
  const { cart } = useGlobalContext()
  return (
    <section className={styles.cartSection}>
      <header>
        <h2 className={styles.cartHeader}>Shopping Cart</h2>
      </header>
      {cart.length > 0 ? (
        <>
          <div className={styles.cartTableHeader}>
            <p>product details</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Amount</p>
            <h3></h3>
          </div>
          <hr />
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <hr />
          <footer>
            <div></div>
          </footer>
        </>
      ) : (
        <div className={styles.emptyCart}>
          <h2>Your cart is empty</h2>
          <Button href="product" page="continue Shopping" />
        </div>
      )}
    </section>
  );
}

export default CartContainer;
