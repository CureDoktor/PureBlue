import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./CardSection.styles.module.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { useResolvedPath } from "react-router";
const CardSection = ({ handleShow }) => {
  const router = useRouter();
  const cardInfo = [
    {
      title: "Erectile Dysfunction",
      img: "/assets/homepage/card/card1.png",
      soon: false,
    },
    {
      title: "Custom Medication",
      img: "/assets/homepage/card/card2.png",
      soon: true,
    },
    {
      title: "Men's Hair Loss",
      img: "/assets/homepage/card/card3.png",
      soon: true,
    },
    {
      title: "Testosterone",
      img: "/assets/homepage/card/card4.png",
      soon: true,
    },
    {
      title: "Weight Loss",
      img: "/assets/homepage/card/card5.png",
      soon: true,
    },
  ];
  return (
    <Container className={styles.container}>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          375: { slidesPerView: 1.6, spaceBetween: 1 },
          425: { slidesPerView: 2, spaceBetween: 5 },
          500: { slidesPerView: 2, spaceBetween: 5 },
          600: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1200: { slidesPerView: 5, spaceBetween: 10 },
        }}
      >
        {cardInfo.map((card, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              if (!card.soon) {
                router.push("transition-page");
              }
            }}
            className={styles.slide}
          >
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={card.img}
                height={"170px"}
                className={styles.cardImg}
              />
              <Card.Body className={styles.cardContent}>
                <div>
                  <Card.Title className={styles.cardTitle}>
                    {card.title}
                  </Card.Title>

                  <div className={styles.cardButton}>
                    {card.soon && <span>coming soon</span>}
                    {!card.soon && (
                      <img src="/assets/homepage/card/arrow.png" alt="arrow" />
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardSection;
