import HeroImage from "/images/jon-ly-Xn7GvimQrk8-unsplash (1) 1.svg";
import styles from './Hero.module.css'
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <article className={styles.heroInfo}>
          <h2 className={styles.heroHeader}>Catch your own </h2>
          <h2 className={styles.blueInfo}>Stylish and look</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <button className={styles.btn}>
            <Link href="/shop">shop now</Link>
          </button>
        </article>
        <article className={styles.heroImg}>
          <Image src={HeroImage} alt="HeroImage" className={styles.heroImage} />
        </article>
      </div>
    </section>
  );
}

export default Hero;
