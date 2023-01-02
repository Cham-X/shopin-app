import { useRouter } from "next/router";
import ItemList from "../../components/ItemList/ItemList";
import SHOP_DATA from "../../data/shoppingData";

const getProductByCategory = (category) => {
  const product = SHOP_DATA.filter((product) => product.category === category);
  return product;
};

const ItemCategory = (props) => {
  const router = useRouter();
  return (
    <>
      <section>
        <h2>Result for {router.query.itemCategory}</h2>
        <ItemList data={props.categoryData} />
      </section>
    </>
  );
};

export default ItemCategory;

export async function getServerSideProps(context) {
  const itemCategory = context.query.itemCategory;
  const products = getProductByCategory(itemCategory);
  return {
    props: {
      categoryData: products,
    },
  };
}
