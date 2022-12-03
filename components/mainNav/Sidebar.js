import Link from 'next/link';
import Image from 'next/image'
import {FaTimes} from "react-icons/fa"
import Logo from "../images/Shopin.png";
import Cart from "../images/Vector.png";
import Search from "../images/Vector (2).png";
import Style from './Sidebar.module.css'
import { useGlobalContext } from '../../Contexts/globalContext'

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? Style.sidebarWrapper.show  : Style.sidebarWrapper}`}>
      <div className={Style.overlay}></div>
      <div className={Style.sidebar}>
        <div className={Style.header}>
          <Image src={Logo} alt="logo" className={Style.logo} />
          <button className={Style.closeNav} onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className={Style.linkList}>
          <ul className={Style.links}>
            <li>
              <Link href="/">home</Link>
            </li>
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
          <ul className={Style.iconLink}>
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
      </div>
    </aside>
  );
}

export default Sidebar
