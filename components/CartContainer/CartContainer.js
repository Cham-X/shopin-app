import CartItem from "../../components/CartItem/CartItem";
import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./CartContainer.module.css"

function CartContainer() {
  const { cart } = useGlobalContext()
  return (
    <section className={styles.cartSection}>
      <header>
        <h2 className={styles.cartHeader}>Shopping Cart</h2>
      </header>
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
          return(
            <CartItem key={item.id} {...item}/>
          )
        })}
      </div>
      <hr />
      <footer>
        <div>

        </div>
      </footer>

    </section>
  );
}

export default CartContainer;
