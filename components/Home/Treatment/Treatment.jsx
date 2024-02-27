import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./treatment.styles.module.scss";

const cardInfo = [
  {
    title: "Erectile dysfunction",
    text: `Trouble getting hard?`,
    buttonText: "Get Started",
    imgSrc: "/assets/homepage/card3/card1.png",
    imgAlt: "Erectile dysfunction",
  },
  {
    title: "Custom Medication",
    text: `Need more powerful customized treatment?`,
    buttonText: "Get Started",
    imgSrc: "/assets/homepage/card3/card2.png",
    imgAlt: "Custom Medication",
  },
  {
    title: "Men's Hair Loss",
    text: `Losing or thinning hair?`,
    buttonText: "Get Started",
    imgSrc: "/assets/homepage/card3/card3.png",
    imgAlt: "Men's Hair Loss",
  },
  {
    title: "Men's Hair Loss",
    text: `Losing or thinning hair?`,
    buttonText: "Get Started",
    imgSrc: "/assets/homepage/card3/card3.png",
    imgAlt: "Men's Hair Loss",
  },
  {
    title: "Men's Hair Loss",
    text: `Losing or thinning hair?`,
    buttonText: "Get Started",
    imgSrc: "/assets/homepage/card3/card3.png",
    imgAlt: "Men's Hair Loss",
  },
];

const Treatment = () => {
  return (
    <Container className={styles.mainContainer}>
      <h1 className="mb-5">
        Personalized treatment plans from
        <br />
        <span> board-certified physicians</span>
      </h1>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          425: { slidesPerView: 1.2, spaceBetween: 5 },
          500: { slidesPerView: 1.6, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 12 },
          1024: { slidesPerView: 3, spaceBetween: 12 },
          1200: { slidesPerView: 3, spaceBetween: 12 },
        }}
      >
        {cardInfo.map((card, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card className={styles.card}>
              <Card.Body
                className={styles.cardBody}
                style={{ backgroundImage: `url(${card.imgSrc})` }}
              >
                <Card.Title className={styles.cardTitle}>
                  {card.title}
                </Card.Title>
                <div>
                  <Card.Text className={styles.cardText}>{card.text}</Card.Text>
                  <Button className={`bg-primary ${styles.cardBtn}`}>
                    {card.buttonText}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Treatment;
