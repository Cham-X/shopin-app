import styles from "./ItemList.module.css";
import Item from "../Item/Item";


function ItemList({data}) {
  return (
    <ul className={styles.listItem}>
      {data.map((item) => {
        return <Item 
        key={item.id} 
        image={item.image}
        name={item.name}
        price={item.price}
         />;
      })}
    </ul>
  );
}

export default ItemList;
