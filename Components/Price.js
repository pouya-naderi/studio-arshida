import Image from "next/image";
import styles from "../styles/price.module.css";

const Price = ({ number, titr, options, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.upLogo}>
        <img src="/images/arshidaLogo.png" alt="logo arshida" />
      </div>
      <h3 className={styles.titr}>{titr}</h3>
      <div className={styles.options}>
        {options.map((option) => {
          return (
            <span className={styles.optionText} key={option.id}>
              {option.text}
            </span>
          );
        })}
      </div>
      <span className={styles.priceLabel}>{price}</span>
      <div className={styles.englishLogo}>
        <img src="/images/arshdaEnglish.png" alt="arshida logo english" />
      </div>
    </div>
  );
};

export default Price;
