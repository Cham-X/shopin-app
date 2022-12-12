import styles from "./ProductItem.module.css";
import ItemList from "../ItemList/ItemList";
import Button from "../Button/Button";
import { useGlobalContext } from "../../Contexts/globalContext";

const Product = () => {
  const {categories} = useGlobalContext()
  return (
    <section className={styles.container}>
      <div className={styles.ourProduct}>
        <div className={styles.sectionHeader}>
          <h3>Featured Products</h3>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.products}>
          <div>
            <ul>
              <ItemList data={categories}/>
            </ul>
          </div>
        </div>
        <Button href={"product"} page={"all products"}/>
      </div>
    </section>
  );
};

export default Product;
