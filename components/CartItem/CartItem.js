import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./CartItem.module.css";

const CartItem = ({id,image,name,price,quantity}) => {
  const {remove,increase,decrease} = useGlobalContext()
  return (
    <article className={styles.CartItem}>
      <div className={styles.imageContainer}>
        <Image src={"/" + image} alt="name" width="1000" height="1000" className={styles.cartImage} />
        <h4 className={styles.cartName}>{name}</h4>
      </div>
      <div>
        <h4 className={styles.itemPrice}>${price}</h4>
      </div>
      <div className={styles.amountContainer}>
        {/* decrease button */}
        <button className={styles.amountBtn} onClick={() => decrease(id)}>
          <FaMinus />
        </button>
        {/* item quantity */}
        <h4 className={styles.amount}>m{quantity}</h4>
        {/* increase button */}
        <button className={styles.amountBtn} onClick={() => increase(id)}>
          <FaPlus />
        </button>
      </div>
      <h4 className={styles.totalAmount}>${quantity * price}</h4>
      {/* remove button */}
      <button className={styles.deleteBtn} onClick={() => remove(id)}>
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
