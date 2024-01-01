import React from "react";
import Image from "next/image";
import { Layout } from "@/Components/Layout";
import landing from "/public/svg/404.svg";
import styles from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src={landing}
          alt="page not found"
          width={600}
          className={styles.image}
        />
        <h1>ببین ما از این صفحه ها نداریم...</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
