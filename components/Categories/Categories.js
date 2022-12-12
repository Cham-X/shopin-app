import { useGlobalContext } from "../../Contexts/globalContext";
import styles from "./Categories.module.css";

const Categories = () => {
  const { category, filterItems } = useGlobalContext();
  return (
    <div className={styles.btnContainer}>
      {category.map((item,index) => {
        return <button key={index} className={styles.filterBtn} onClick={() => filterItems(item)}>{category}</button>;
      })}
    </div>
  );
};

export default Categories;
