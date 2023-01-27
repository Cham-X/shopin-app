import { useRouter } from "next/router";
import ItemDetails from "../../../components/ItemDeatails/ItemDetail";
import SHOP_DATA from "../../../data/shoppingData";

function ItemDetailPage(props) {
  const router = useRouter();
  const itemId = router.query.id;
  return (
    <div>
      <ItemDetails id={itemId} name={props.productData.name} image={props.productData.image} price={props.productData.price} description={props.productData.description}/>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: SHOP_DATA.map((item) => item.id)
  };
}

export async function getStaticProps(context) {
  const itemId = context.query.itemId;

  const selectedItem = SHOP_DATA.find((item) => item.id.toString() === itemId);
  return {
    props: {
      productData: {
        id: selectedItem.id.toString(),
        name: selectedItem.name,
        image: selectedItem.image,
        price: selectedItem.price,
        description: selectedItem.description,
      },
    },
  };
}



export default ItemDetailPage;
