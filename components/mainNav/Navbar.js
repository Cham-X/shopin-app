import Link from "next/link";
import Image from "next/image";
import Style from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Logo from "../images/Shopin.png";
import Cart from "../images/Vector.png";
import Search from "../images/Vector (2).png";
import { useGlobalContext } from "../../Contexts/globalContext";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className={Style.nav}>
      <div className={Style.navbar}>
        <div className={Style.header}>
          <Image src={Logo} alt="logo" className={Style.logo} />
          <button className={Style.toggleBtn} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className={Style.links}>
          <li>
            <Link href="/shop">shop</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
        <ul className={Style.links}>
          <li>
            Cart
            <Image src={Cart} alt="cart" className={Style.cart} />
          </li>
          <li>
            Login
            <Image src={Search} alt="search" className={Style.search} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
