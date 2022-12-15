import Button from "../Button/Button";
import Image from "next/image";
import styles from "./ItemDetails.module.css"

function ItemDetail(props) {
  return (
    <>
      <section className={styles.itemSection}>
        <article>
          <Image src="/images/shoes/radek-skrzypczak-WlB8TsI_th0-unsplash.jpg" alt="item image" width="1000" height="1000" className={styles.itemImage} />
        </article>
        <article className={styles.contentArticle}>
          <div className={styles.itemContent}>
            <p className={styles.itemName}>Lorem ipsum</p>
            <p className={styles.itemPrice}>$344</p>
          </div>
          <div className={styles.itemDescription}>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam, et error qui nostrum ut eos aspernatur, repellat cupiditate tenetur perferendis quibusdam excepturi animi dolor in! Non molestiae nemo nulla!</p>
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
