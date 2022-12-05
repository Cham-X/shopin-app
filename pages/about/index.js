import styles from "/styles/About.module.css";
import Overview from "/images/jon-ly-Xn7GvimQrk8-unsplash (1) 1.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <article className={styles.pageTitle}>
          <h3 className={styles.pageHeader}>
            Home <span className={styles.blueText}> / About</span>
          </h3>
        </article>

        <article className={styles.aboutImage}>
          <Image src={Overview} alt="overview" className={styles.aboutImg} />
        </article>
        <article className={styles.aboutContent}>
          <div className={styles.contentHeader}>
            <h4>About Us</h4>
            <div className={styles.underline}></div>
          </div>
          <div>
            <p className={styles.aboutPara}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque id corporis et, saepe cum sed culpa temporibus ducimus mollitia provident aliquam ratione vero animi minus, blanditiis asperiores ipsa ex officia voluptates consectetur sunt. Expedita saepe ut ducimus temporibus alias accusantium omnis corporis quis necessitatibus, adipisci atque, exercitationem perferendis aliquam?</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
