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

const CardCarousel = (product) => {
  const swiperRef = useRef(null);

  var reviews = [
    {
      id: 1,
      date: "12-28-2023",
      reviewText:
        "I’ve been using the expensive brand for over 5 years now, and PureBlue’s Generic Viagra is exactly the same. It’s like I’m saving hundreds of dollars every month just by switching over to PureBlue!",
      reviewerName: "Gino P.",
      isVerified: true,
      star: 5,
    },
    {
      id: 4,
      date: "12-18-2023",
      reviewText:
        "I’ve always wanted to try ED pills, but the costs of going to a doctor, and telling a stranger intimate details about my personal life doesn’t appeal to me. It’s a good thing that PureBlue made it possible for guys like me to get Generic Viagra without all that hassle.",
      reviewerName: "Mitch J.",
      isVerified: true,
      star: 5,
    },

    {
      id: 3,
      date: "10-10-2023",
      reviewText:
        "I go through a lot of these pills every month, and the only reason why I can use so many Generic Viagra pills is because Pureblue made it so affordable for guys like me. It’s the only reason why I still have a healthy sex life at 60!",
      reviewerName: "Dawson M.",
      isVerified: true,
      star: 5,
    },
    {
      id: 3,
      date: "01-18-2024",
      reviewText:
        "We live in a small town where everyone knows everyone – even the pharmacist. I couldn’t get myself to buy ED pills from the guy I went to school with, so good thing there’s PureBlue. I get my pills delivered to my doorstep. No hassle, no embarrassment!",
      reviewerName: "Richard S.",
      isVerified: true,
      star: 5,
    },
    {
      id: 3,
      date: "14-02-2024",
      reviewText:
        "I remarried last year, and my wife is 20 years younger than I am, and Generic Viagra is the secret to our incredible sex life. My wife and PureBlue are the two reasons why I still feel like I’m in my 20s!",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 5,
    },
  ];

  if (product.product == "Tadalafil") {
    reviews = [
      {
        id: 1,
        date: "12-18-2023",
        reviewText:
          " Pureblue’s Generic Cialis is exactly what I want – affordable ED medication, without worrying if it will mess up my health. I get my pills delivered straight to my doorstep, and I don’t even have to leave my house to place my order!",
        reviewerName: "James H.",
        isVerified: true,
        star: 5,
      },
      {
        id: 4,
        date: "12-18-2023",
        reviewText:
          "All I can say is, Generic Cialis is the way to go if you want to be spontaneous with your girl. I take mine hours before go-time, and it’s just as effective. Pureblue only delivers the real deal, so I’m always confident that I’ll be ready, whenever the opportunity presents itself.",
        reviewerName: "Will H.",
        isVerified: true,
        star: 5,
      },

      {
        id: 3,
        date: "12-18-2023",
        reviewText:
          "I used to spend hundreds of dollars just to get these pills from my Pharmacy. Now, I just use my phone, and PureBlue takes care of everything. It’s life-changing!",
        reviewerName: "Jimmy J.",
        isVerified: true,
        star: 5,
      },
      {
        id: 3,
        date: "12-18-2023",
        reviewText:
          "Pureblue made generic Cialis so affordable that I always have enough every month to help me keep up with my girl’s insatiable appetite.",
        reviewerName: "Ben D.",
        isVerified: true,
        star: 5,
      },
      {
        id: 3,
        date: "12-18-2023",
        reviewText:
          "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
        reviewerName: "Mark V.",
        isVerified: true,
        star: 5,
      },
    ];
  }
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
