import React, { useRef } from "react";
import styles from "./CardCarousel.styles.module.scss";
import { Card, Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Navigation, Autoplay } from "swiper";

const CardCarousel = () => {
  const swiperRef = useRef(null);

  const reviews = [
    {
      id: 1,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 1,
    },
    {
      id: 4,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 1,
    },

    {
      id: 3,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 2,
    },
    {
      id: 3,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 2,
    },
    {
      id: 3,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 2,
    },
  ];
  return (
    <Container className={styles.container}>
      <img
        onClick={() => swiperRef.current?.slidePrev()}
        src="/assets/landingPageV2/leftArrow/left.png"
        className={styles.leftArrow}
      />

      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          425: { slidesPerView: 1, spaceBetween: 5 },
          500: { slidesPerView: 1, spaceBetween: 5 },
          600: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          1440: { slidesPerView: 3, spaceBetween: 20 },
          2560: { slidesPerView: 3, spaceBetween: 10 },
        }}
      >
        {reviews.map((card, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <ReviewCard
              key={index}
              reviewText={card.reviewText}
              reviewerName={card.reviewerName}
              star={card.star}
              date={card.date}
              isVerified={card.isVerified}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        onClick={() => swiperRef.current?.slideNext()}
        src="/assets/landingPageV2/rightArrow/right.png"
        className={styles.rightArrow}
      />
    </Container>
  );
};

export default CardCarousel;
