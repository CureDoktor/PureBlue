import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Popular.styles.module.scss";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const Popular = () => {
  const products = [
    {
      name: "Generic Viagra",
      description: "(Sildenafil Citrate)",
      rating: "/assets/homepage/Popular/stars.png",
      imageUrl: "/assets/homepage/Popular/popular.png",
    },
    {
      name: "Generic Cialis",
      description: "(Tadalafil)",
      rating: "/assets/homepage/Popular/stars.png",
      imageUrl: "/assets/homepage/Popular/popular.png",
    },
    {
      name: "Alpha Protocol",
      description: "Testosterone Enhancement",
      rating: "/assets/homepage/Popular/stars.png",
      imageUrl: "/assets/homepage/Popular/popular.png",
    },
    {
      name: "Alpha Protocol",
      description: "Testosterone Enhancement",
      rating: "/assets/homepage/Popular/stars.png",
      imageUrl: "/assets/homepage/Popular/popular.png",
    },
    {
      name: "Alpha Protocol",
      description: "Testosterone Enhancement",
      rating: "/assets/homepage/Popular/stars.png",
      imageUrl: "/assets/homepage/Popular/popular.png",
    },
  ];

  return (
    <Container className={styles.mainContainer}>
      <h1>Popular</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          425: { slidesPerView: 1, spaceBetween: 5 },
          500: { slidesPerView: 1, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          // 768: { slidesPerView: 3, spaceBetween: 10 },
          800: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 4, spaceBetween: 10 },
          // 320: { slidesPerView: 1, spaceBetween: 5 },
          // 425: { slidesPerView: 2, spaceBetween: 5 },
          // 500: { slidesPerView: 2, spaceBetween: 5 },
          // 640: { slidesPerView: 2, spaceBetween: 20 },
          // 768: { slidesPerView: 3, spaceBetween: 30 },
          // 1024: { slidesPerView: 4, spaceBetween: 10 },
          // 1200: { slidesPerView: 5, spaceBetween: 10 },
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
