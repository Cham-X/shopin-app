import Card from "../Card/Card";
import styles from "./ProductItem.module.css";
import Image from "next/image";
import {FaSearch} from "react-icons/fa"
import { useRouter } from "next/router";

function ProductItem(props) {
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
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
