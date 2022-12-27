import Button from "../Button/Button";
import Image from "next/image";
import styles from "./ItemDetails.module.css";
import { useGlobalContext } from "../../Contexts/globalContext";

function ItemDetail({ id, name, image, description, price }) {
  const { addToCart } = useGlobalContext();
  
  return (
    <>
      <section className={styles.itemSection}>
        <article>
          <Image src={"/" + image} alt={name} width="1000" height="1000" className={styles.itemImage} />
        </article>
        <article className={styles.contentArticle}>
          <div className={styles.itemContent}>
            <p className={styles.itemName}>{name}</p>
            <p className={styles.itemPrice}>${price}</p>
          </div>
          <div className={styles.itemDescription}>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
        <div className={styles.btnContainer}>
          <div>
            <Button className={styles.btn1} href={"product"} page={"Back to Shopping"} />
          </div>
          <div onClick={() => addToCart(id)}>
            <Button className={styles.btn2} href={"cart"} page={"add to cart"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemDetail;
