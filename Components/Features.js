import styles from "../styles/Features.module.css";

const Features = ({ titr, description }) => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.titr}>{titr}</h3>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  );
};

export default Features;
