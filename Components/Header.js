import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export function Header() {
  const [hbg, setHbg] = useState(true);
  return (
    <header className={styles.container}>
      <nav>
        <div>
          <div className={styles.hbgMenu} onClick={() => setHbg(!hbg)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>

          <div className={`${styles.menu} ${hbg ? styles.active : ""}`}>
            <div>
              <Link className={styles.link} href="/">
                خانه
              </Link>
            </div>
            <div>
              <Link className={styles.link} href="/development">
                برنامه نویسی
              </Link>
            </div>
            <div>
              <Link className={styles.link} href="/architecture">
                معماری
              </Link>
            </div>
            <div>
              <Link className={styles.link} href="/photography">
                عکاسی
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
        <Image src="/images/name.png" alt="logo" width="150" height="30" />
      </div>
    </header>
  );
}
