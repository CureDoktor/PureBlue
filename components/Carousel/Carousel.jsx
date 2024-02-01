import React from "react";
import styles from "./Carousel.styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import starsImage from "../../public/assets/stars.png";
import verifiedSrc from "../../public/assets/verified.png";

const Carousel = ({ items, setSwiperInstance }) => {
  return (
    <Swiper
      className={styles.carousel}
      onSwiper={setSwiperInstance}
      loop
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className={styles.item}>
          <>
            <div className={styles.content}>
              <div className={styles.rating}>
                <Image src={starsImage} alt="stars" layout="fill" />
              </div>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
            <div className={styles.footer}>
              <p>{item.author}</p>{" "}
              {item.isVerified && (
                <div className={styles.verified}>
                  <Image
                    src={verifiedSrc}
                    width={22}
                    height={22}
                    alt="verified badge"
                  />
                  Verified Customer
                </div>
              )}
            </div>
          </>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
