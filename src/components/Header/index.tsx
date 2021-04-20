import React from "react";
import Link from "next/link";

import pageNavigation from "@utils/pageNavigation";

import styles from "@styles/Header/index.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <h3 className={styles.brand__title}>Valentin Lica</h3>
      </div>

      <nav className={styles.container__nav}>
        <ul className={styles.nav__menu}>
          {pageNavigation.map((item, index) => {
            const { url, title } = item;

            return (
              <li className={styles.menu__item} key={index}>
                <Link href={url}>
                  <a className={styles.item__link}>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
