import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Popular.styles.module.scss";

const products = [
  {
    name: "Generic Viagra",
    description: "(Sildenafil Citrate)",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/homepage/popular/popular.png",
  },
  {
    name: "Generic Cialis",
    description: "(Tadalafil)",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/homepage/popular/popular.png",
  },
  {
    name: "Alpha Protocol",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/homepage/popular/popular.png",
  },
  {
    name: "Alpha Protocol",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/homepage/popular/popular.png",
  },
  {
    name: "Alpha Protocol",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/homepage/popular/popular.png",
  },
];

const Popular = () => {
  return (
    <Container className={styles.mainContainer}>
      <h1>Popular</h1>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          375: { slidesPerView: 1.3, spaceBetween: 5 },
          425: { slidesPerView: 1.5, spaceBetween: 5 },
          600: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <Card className={styles.card}>
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="text-dark fw-bold">
                  {product.name}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div>
                  <Image src={product.rating} width={90} height={15} />
                </div>
                <div className="text-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                  <h6>Important safety info</h6>
                </div>
                <div className={styles.btnBox}>
                  <Button size="sm" className={`bg-primary ${styles.btn}`}>
                    Get started
                  </Button>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className={styles.btn}
                  >
                    Learn more
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

export default Popular;