import Button from "../Button/Button";
import Image from "next/image";
import styles from "./ItemDetails.module.css"

function ItemDetail(props) {
  return (
    <>
      <section className={styles.itemSection}>
        <article>
          <Image src={"/" + props.image} width="1000" height="1000" className={styles.itemImage} />
        </article>
        <article className={styles.contentArticle}>
          <div className={styles.itemContent}>
            <p className={styles.itemName}>{props.name}</p>
            <p className={styles.itemPrice}>${props.price}</p>
          </div>
          <div className={styles.itemDescription}>
            <p className={styles.description}>{props.description}</p>
          </div>
        </article>
        <div className={styles.btnContainer}>
          <Button className={styles.btn1} href={"product"} page={"Back to Shopping"} />
          <Button className={styles.btn2} href={"cart"} page={"add to cart"} />
        </div>
      </section>
    </>
  );
}

export default ItemDetail;
