import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} <span className={styles.blueText}> shopin</span>
      </p>
      <p>All rights reserved</p>
    </footer>
  );
}

export default Footer
