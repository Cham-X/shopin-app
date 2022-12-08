import styles from "./ProductItem.module.css";

import data from "/data/shoppingData";
import CartItemList from "../ItemList/CartItemList";

const Product = () => {
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
              <CartItemList />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
