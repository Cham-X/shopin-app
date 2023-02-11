import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({ href,page }) => {
  return <button className={styles.btn}>
    <Link href={"/" + href}>
      {page}
      </Link>
      </button>;
};

export default Button;
