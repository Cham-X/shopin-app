import styles from "./Product.module.css";

const Product = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ourProduct}>
        <div className={styles.sectionHeader}>
          <h3>Featured Products</h3>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.products}>
          <h2>content</h2>
        </div>
      </div>
    </section>
  );
};

export default Product;
