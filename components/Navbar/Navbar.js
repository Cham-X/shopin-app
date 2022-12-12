import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../Contexts/globalContext";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.header}>
          <Image src="/images/Shopin.png" alt="logo" className={styles.logo} width="1000" height="1000" />
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
                <Image src="/images/Vector.png" alt="cart" className={styles.cart} width="1000" height="1000" />
                <div className={styles.count}>75</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              Login
              <Image src="/images/Vector (2).png" alt="search" className={styles.search} width="1000" height="1000" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
