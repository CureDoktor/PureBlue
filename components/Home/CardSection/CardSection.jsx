import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import styles from "./CardSection.styles.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const CardSection = () => {
  const cardInfo = [
    { title: "Erectile Dysfunction", img: "/assets/homepage/card/card1.png" },
    { title: "Custom Medication", img: "/assets/homepage/card/card2.png" },
    { title: "Men's Hair Loss", img: "/assets/homepage/card/card3.png" },
    { title: "Testosterone", img: "/assets/homepage/card/card4.png" },
    { title: "Weight Loss", img: "/assets/homepage/card/card5.png" },
  ];
  return (
    <Container className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          425: { slidesPerView: 2, spaceBetween: 5 },
          500: { slidesPerView: 2, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1200: { slidesPerView: 5, spaceBetween: 10 },
        }}
      >
        {cardInfo.map((card, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={card.img}
                height={"170px"}
                className={styles.cardImg}
              />
              <Card.Body className={styles.cardContent}>
                <Card.Title className={styles.cardTitle}>
                  {card.title}
                </Card.Title>
                <Button className={styles.cardButton}>
                  <Image
                    src="/assets/homepage/card/arrow.png"
                    width={20}
                    height={20}
                    alt="arrow"
                  />
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardSection;
