import styles from "./ItemList.module.css";
import ProductItem from "../ProductItem/ProductItem";


function ItemList({ data }) {
  return (
    <ul className={styles.listItem}>
      {data.map((item) => {
        return <ProductItem key={item.id} id={item.id} {...item} />;
      })}
    </ul>
  );
}

export default ItemList;
