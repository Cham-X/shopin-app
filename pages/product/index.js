import Categories from "../../components/Categories/Categories";
import ItemList from "../../components/ItemList/ItemList";
import SHOP_DATA from "../../data/shoppingData";

const productPage = (props) => {
  return (
    <>
      <hr />
      <section>
        <Categories />
        <ItemList data={props.productData} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      productData: SHOP_DATA,
    },
  };
}
export default productPage;
