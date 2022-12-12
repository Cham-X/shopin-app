import Card from "../Card/Card";
import styles from "./CartItem.module.css";
import Image from "next/image";
import Search from "/images/Vector (2).png"

function CartItem(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.imageContainer}>
          <Image src={"/" + props.image} alt="itemImage" className={styles.itemImage} width="1000" height="1000" />
        </div>
        <div className={styles.itemDetails}>
          <p className={styles.itemName}>{props.name}</p>
          <p className={styles.itemPrice}>${props.price}</p>
        </div>
      </Card>
      <div className={styles.overlay}>
        <div>
          <Image src={Search} alt="search"/>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
