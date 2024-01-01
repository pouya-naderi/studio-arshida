import Right from "@/styles/Icons/right";
import Left from "@/styles/Icons/left";
import styles from "../styles/seperetor.module.css";

const Seperator = ({ content }) => {
  return (
    <div className={styles.container}>
      <Right width="35%" height="7%" color="#d0a449" />
      <h1 className={styles.title}>{content}</h1>
      <Left width="35%" height="7%" color="#d0a449" />
    </div>
  );
};

export default Seperator;
