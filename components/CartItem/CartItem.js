import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./CartItem.module.css";


const CartItem = ({ id, image, name, price, quantity }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useGlobalContext();
  return (
    <article className={styles.CartItem}>
      <div>
        <Image src={"/" + image} alt="name" width="1000" height="1000" className={styles.cartImage} />
      </div>
      <div>
        <h4 className={styles.cartName}>{name}</h4>
      </div>
      <div>
        <h4 className={styles.itemPrice}>${price}</h4>
      </div>
      <div className={styles.amountContainer}>
        {/* decrease button */}
        <button className={styles.amountBtn} onClick={() => decreaseQuantity(id)}>
          <FaMinus />
        </button>
        {/* item quantity */}
        <h4 className={styles.amount}>{quantity}</h4>
        {/* increase button */}
        <button className={styles.amountBtn} onClick={() => increaseQuantity(id)}>
          <FaPlus />
        </button>
      </div>
      <h4 className={styles.totalAmount}>${quantity * price}</h4>
      {/* remove button */}
      <button className={styles.deleteBtn} onClick={() => removeFromCart(id)}>
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
