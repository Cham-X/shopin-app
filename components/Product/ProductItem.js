import styles from "./ProductItem.module.css";

import data from "/data/shoppingData";
import CartItemList from "../ItemList/CartItemList";
import Button from "../Button/Button";

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
        <Button href={"shop"} page={"all products"}/>
      </div>
    </section>
  );
};

export default Product;
