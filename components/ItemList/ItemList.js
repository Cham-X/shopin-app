import styles from "./ItemList.module.css";
import Item from "../Item/Item";
import SHOP_DATA from "../../data/shoppingData";

function ItemList({ data }) {
  return (
    <ul className={styles.listItem}>
      {data.map((item) => {
        const { id, image, name, price } = item;
        return <Item key={item.id} image={item.image} name={item.name} price={item.price} />;
      })}
    </ul>
  );
}

export default ItemList;
