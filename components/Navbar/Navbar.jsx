import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { links } from "../../data/navbarData";
import { iconicalLink } from "../../data/navbarData";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../Contexts/globalContext";

const Navbar = () => {
  const { openSidebar,cartItems } = useGlobalContext();

  function getTotalItem(){
return cartItems.reduce((accumulator,item) => accumulator + item.quantity,0)
  }
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
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link href={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.links}>
          {iconicalLink.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <Link href={url}>
                  <span>{text}</span>
                  <span className={styles.cartContainer}>
                    {icon}
                    {link.text === "cart" && <span className={styles.count}>{getTotalItem()}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
