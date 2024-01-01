import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className={styles.container}>
      <nav>
        <div>
          <div className={styles.menu}>
            <div>
              <Link className={styles.link} href="/">
                خانه
              </Link>
            </div>
            <div>
              <Link className={styles.link} href="/studioArshida">
                استودیو آرشیدا
              </Link>
            </div>
            <div>
              <Link className={styles.link} href="/contact">
                تماس با من
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <p className={styles.footerText}>کپی مطالب با ذکر منبع بلامانع است.</p>
      </div>
      <div>
        <Image src="/images/name.png" alt="logo" width="150" height="30" />
      </div>
    </footer>
  );
}
