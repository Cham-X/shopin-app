import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../Card/Card";
import styles from "./Categories.module.css";

const Categories = (props) => {
  const router = useRouter();


  const showItemCategory = () => {
    router.push("/" + props.category);
  };

  return (
    <li className={ styles.item } onClick={ showItemCategory }>
      <article>
        <Card>
          <div className={ styles.imageContainer }>
            <Image src={ "/" + props.image } alt={ props.name } className={ styles.itemImage } width="1000" height="1000" />
          </div>
          <div className={ styles.itemDetails }>
            <h3 className={ styles.itemName }>{ props.category }</h3>
          </div>
        </Card>
      </article>
    </li>
  );
};

export default Categories;
