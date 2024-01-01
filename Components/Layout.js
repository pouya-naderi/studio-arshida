import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "../styles/Layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.landing}>{children}</main>
      <Footer />
    </div>
  );
}
