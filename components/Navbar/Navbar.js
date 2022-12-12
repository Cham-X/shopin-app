import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import Logo from "/images/Shopin.png";
import Cart from "/images/Vector.png";
import Search from "/images/Vector (2).png";
import { useGlobalContext } from "../../Contexts/globalContext";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.header}>
          <Image src={Logo} alt="logo" className={styles.logo} />
          <button className={styles.toggleBtn} onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/product">products</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
        <ul className={styles.links}>
          <li>
            <Link href="/cart">
              Cart
              <div className={styles.cartContainer}>
                <Image src={Cart} alt="cart" className={styles.cart} />
                <div className={styles.count}>75</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              Login
              <Image src={Search} alt="search" className={styles.search} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
