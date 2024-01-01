import dynamic from "next/dynamic";
import styles from "../styles/index.module.css";
import Seperator from "@/Components/Seperator";
import Image from "next/image";
import Features from "@/Components/Features";
import Price from "@/Components/Price";
import photos from "../data/photosData";
import features from "../data/featuresData";
import prices from "../data/pricesData";
import SimpleMap from "@/Components/SimpleMap";
import Head from "next/head";
import Script from "next/script";

const Home = () => {
  const Map = dynamic(() => import("@/Components/SimpleMap"), {
    loading: () => <p>map is loading...</p>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>استودیو آرشیدا - عکاسی و فیلمبرداری مراسم و تبلیغاتی</title>
        <meta
          name="description"
          content="انجام کلیه امور عکاسی و فیلمبرداری مراسم عقد و عروسی | عکاسی صنعتی و تبلیغاتی | مونتاژ و ادیت عکس و فیلم | باغ اختصاصی | کادر مجرب آقا و خانم"
        />
      </Head>

      <div className={styles.layout}>
        <div className={styles.landingPage}>
          <div className={styles.mainTitr}>
            <div className={styles.landingPhoto}>
              <img src="/images/landingLogo.png" alt="arshida logo" />
            </div>
            <p className={styles.mainparaghraph}>
              بهترین لحظات خود را با ما به تصویر بکشید . . .
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <img
                src={photo.src}
                className={photo.class}
                key={photo.id}
                alt={photo.alt}
              />
            ))}
          </div>
          <Seperator content="مزیت رقابتی ما" />
          <div className={styles.features}>
            <div className={styles.featureContainer}>
              {features.map((feature) => {
                if (feature.id <= 3) {
                  return (
                    <Features
                      key={feature.id}
                      titr={feature.titr}
                      description={feature.description}
                    />
                  );
                }
              })}
            </div>
            <Image
              src="/images/camera.jpg"
              alt="photo of camera"
              width={300}
              height={300}
              className={styles.featureImg}
            />
            <div className={styles.featureContainer}>
              {features.map((feature) => {
                if (feature.id > 3) {
                  return (
                    <Features
                      key={feature.id}
                      titr={feature.titr}
                      description={feature.description}
                    />
                  );
                }
              })}
            </div>
          </div>
          <Seperator content="پکیج های قیمتی" />
          <p className={styles.paraghraph}>
            توجه: قیمت ها مربوط به شهر تهران میباشد.
          </p>
          <div className={styles.prices}>
            {prices.map((price) => {
              return (
                <Price
                  key={price.id}
                  number={price.number}
                  titr={price.titr}
                  options={price.options}
                  price={price.price}
                />
              );
            })}
          </div>
          <Seperator content="اطلاعات تماس" />
          <div className={styles.contact}>
            <div className={styles.addressBar}>
              <p className={styles.address}>
                <span className={styles.boldAddress}>آدرس دفتر :</span>خیابان
                دماوند به طرف شرق - بعد از اتوبان امام علی - نبش یونسیان - مرکز
                خرید خادم زاده - طبقه اول - واحد ۳۰ - استودیو آرشیدا
              </p>
              <p className={styles.address}>
                <span className={styles.boldAddress}>شماره تماس</span> :
                ۰۲۱۷۷۵۹۸۱۲۴
              </p>
              <p className={styles.address}>
                <span className={styles.boldAddress}> موبایل</span> :
                ۰۹۱۲۷۲۹۸۱۲۷
              </p>
            </div>
            <div className={styles.mapContainer}>
              <Map />
            </div>
          </div>
        </div>
        <footer className={styles.footerContainer}>
          <div className={styles.footer}>
            <div className={styles.footerLogo}>
              <img src="/images/arshidaLogo.png" alt="logo" />
            </div>
            <div className={styles.javazContainer}>
              <img src="/images/javaz.jpg" alt="parvaneh" />
            </div>
          </div>
        </footer>
      </div>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MZDHTE6BSQ" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
      </div>
    </>
  );
};

export default Home;
