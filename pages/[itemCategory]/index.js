import { useRouter } from "next/router";
import ItemList from "../../components/ItemList/ItemList";
import categories from "../../data/categoriesData";
import SHOP_DATA from "../../data/shoppingData";

const getProductByCategory = (category) => {
  const product = SHOP_DATA.filter((product) => product.category === category);
  return product;
};

const getAvailableCategory = (category) => {
  const categories = SHOP_DATA.map((product) => product.category === category);
  return categories;
};
console.log(getAvailableCategory());

const ItemCategory = (props) => {
  const router = useRouter();
  return (
    <>
      <nav>{ getAvailableCategory() }</nav>
      <section>
        <h2>Result for { router.query.itemCategory } items</h2>
        <ItemList data={ props.categoryData } />
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
