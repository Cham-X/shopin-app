import ItemList from "../../components/ItemList/ItemList";
import SHOP_DATA from "../../data/shoppingData";

const productPage = (props) => {
  return (
    <>
      <section>
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
