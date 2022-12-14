import Card from "../Card/Card";
import styles from "./Item.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function Item(props) {
  const router = useRouter();

  const showItemDetails = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={styles.item} onClick={showItemDetails}>
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
        <div className={styles.middle}>
          <Image src="/images/Vector (2).png" alt="search" width="1000" height="1000" className={styles.searchIcon} />
        </div>
      </div>
    </li>
  );
}

export default Item;
