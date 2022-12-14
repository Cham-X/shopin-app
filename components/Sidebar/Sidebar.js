import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { links } from "../../data/navbarData";
import { iconicalLink } from "../../data/navbarData";
import { useGlobalContext } from "../../Contexts/globalContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? styles.show.sidebarWrapper : styles.sidebarWrapper}`}>
      <div className={styles.overlay} onMouseEnter={closeSidebar}></div>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <Image src="/images/Shopin.png" alt="logo" className={styles.logo} width="1000" height="1000" />
          <button className={styles.closeNav} onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className={styles.linkList}>
          <ul className={styles.links}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} onClick={closeSidebar}>
                  <Link href={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <ul className={styles.iconLink}>
            {iconicalLink.map((link) => {
               const {id,url,text,icon} = link;
               return (
                 <li key={id} onClick={closeSidebar}>
                   <Link href={url}>
                     <span>{text}</span>
                     <span className={styles.cartContainer}>
                       {icon}
                       {link.text === "cart" && <span className={styles.count}>9</span>}
                     </span>
                   </Link>
                 </li>
               );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
