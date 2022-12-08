import styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem"
import SHOP_DATA from "../../data/shoppingData";

function CartItemList(props) {
  return (
    <ul>
      {props.SHOP_DATA.map((item) => {
        return <CartItem key={item.id} image={item.image} />;
      })}
    </ul>
  );
}

export default CartItemList;
