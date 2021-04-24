import styles from "@styles/Footer/index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.container__text}>
        &#169; Copyright Valentin Lica, 2020–{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
