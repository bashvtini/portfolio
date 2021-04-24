import styles from "@styles/Contact/social.module.scss";

const Socials: React.FC = () => {
  const socialLinks = [
    {
      icon: null,
      link: "Facebook",
      text: "Social",
    },
    {
      icon: null,
      link: "Facebook",
      text: "Social",
    },
    {
      icon: null,
      link: "Facebook",
      text: "Social",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.container__text}>You can also find me on:</h2>

      <ul className={styles.container__menu}>
        {socialLinks.map((item, index) => {
          const { icon, link, text } = item;

          return (
            <li className={styles.menu__item} key={index}>
              <a href={link}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
