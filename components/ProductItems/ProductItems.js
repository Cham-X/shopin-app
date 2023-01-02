import styles from "./ProductItems.module.css";
import Button from "../Button/Button";
import { useGlobalContext } from "../../Contexts/globalContext";
import Categories from "../Categories/Categories";

const Product = () => {
  const { categories } = useGlobalContext();
  return (
    <section className={styles.container}>
      <div className={styles.ourProduct}>
        <div className={styles.sectionHeader}>
          <h3>Featured Products</h3>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.products}>
          <ul className={styles.itemCategory}>
            {categories.map((item) => {
              return <Categories key={item.id} {...item} />;
            })}
          </ul>
        </div>
        <Button href={"product"} page={"all products"} />
      </div>
    </section>
  );
};

export default Product;
