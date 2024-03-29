import styles from './Hero.module.css'
import Image from "next/image";
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        <article className={styles.heroInfo}>
          <h2 className={styles.heroHeader}>Catch your own </h2>
          <h2 className={styles.blueInfo}>Stylish and look</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <Button href={"product"} page={"shop now"} />
          </article>
         <article className={styles.heroImg}>
          <Image src="/images/jon-ly-Xn7GvimQrk8-unsplash (1) 1.svg" alt="HeroImage" className={styles.heroImage} width="1000" height="570" />
        </article> 
      
      </div>
    </section>
  );
}

export default Hero;
