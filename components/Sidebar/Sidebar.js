import Link from 'next/link';
import Image from 'next/image'
import {FaTimes} from "react-icons/fa"
import Logo from "/images/Shopin.png";
import Cart from "/images/Vector.png";
import Search from "/images/Vector (2).png";
import styles from './Sidebar.module.css'
import { useGlobalContext } from '../../Contexts/globalContext'

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? styles.sidebarWrapper.show : styles.sidebarWrapper}`}>
      <div className={styles.overlay} onMouseEnter={closeSidebar} onMouseLeave={closeSidebar}></div>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <Image src={Logo} alt="logo" className={styles.logo} />
          <button className={styles.closeNav} onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.linkList}>
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
          <ul className={styles.iconLink}>
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
      </div>
    </aside>
  );
}

export default Sidebar
