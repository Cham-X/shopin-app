import Card from '../Card/Card'
import styles from './CartItem.module.css'
import shoes from "/images/jon-ly-Xn7GvimQrk8-unsplash (1) 1.svg";
import Image from 'next/image'

function CartItem(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.imageContainer}>
          <Image src={props.image} alt="itemImage" className={styles.itemImage} width="70" height="70"/>
        </div>
        <div className={styles.itemDetails}>
          <p className={styles.itemName}>{props.name}</p>
          <p className={styles.itemPrice}>${props.price}</p>
        </div>
      </Card>
    </li>
  );
}

export default CartItem
