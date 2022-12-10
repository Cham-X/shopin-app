import styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem"
import SHOP_DATA from "../../data/shoppingData";
import categories from "../../data/categoriesData";

function CartItemList() {
  return (
    <ul className={styles.listItem}>
      {categories.map((item) => {
        return <CartItem 
        key={item.id} 
        image={item.image}
        name={item.name}
        price={item.price}
         />;
      })}
    </ul>
  );
}

export default CartItemList;
