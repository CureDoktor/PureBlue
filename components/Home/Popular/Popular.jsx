import Image from "next/image";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import styles from "./popular.styles.module.scss";
import { searchParamsUrl } from "../../searchParams";

const products = [
  {
    name: "Generic Viagra",
    description: "(Sildenafil Citrate)",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/Generic Viagra.png",
    comingSoon: false,
    redirectUrl: "/landing-page-v2",
  },
  {
    name: "Generic Cialis",
    description: "(Tadalafil)",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/Generic Cialis.png",
    comingSoon: false,
    redirectUrl: "/tadalafil",
  },
  {
    name: "Alpha Protocol",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/Alpha Protocol.png",
    comingSoon: true,
  },
  {
    name: "Shred Protocol",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/Shred Protocol.png",
    comingSoon: true,
  },
  {
    name: "Finasteride",
    description: "Testosterone Enhancement",
    rating: "/assets/homepage/popular/stars.png",
    imageUrl: "/assets/Finasteride.png",
    comingSoon: true,
  },
];

const Popular = ({ handleShow }) => {
  const router = useRouter();
  return (
    <Container className={styles.mainContainer}>
      <h1>Popular</h1>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={5}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          375: { slidesPerView: 1.3, spaceBetween: 5 },
          425: { slidesPerView: 1.5, spaceBetween: 5 },
          600: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1200: { slidesPerView: 5, spaceBetween: 10 },
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
                    width={180}
                    height={200}
                  />
                  <h6>Important safety info</h6>
                </div>
                <div className={styles.btnBox}>
                  <Button
                    size="sm"
                    disabled={product.comingSoon}
                    onClick={handleShow}
                    className={`bg-primary ${styles.btn}`}
                    style={{ fontSize: product.comingSoon ? "10px" : "13px" }}
                  >
                    {product.comingSoon ? "Coming Soon" : "Get started"}
                  </Button>
                  <Button
                    variant="outline-dark"
                    disabled={product.comingSoon}
                    onClick={() => {
                      if (product.redirectUrl == "/tadalafil") {
                        handleShow();
                      } else {
                        router.push(product.redirectUrl + searchParamsUrl());
                      }
                    }}
                    size="sm"
                    className={styles.btn}
                    style={{ fontSize: product.comingSoon ? "10px" : "13px" }}
                  >
                    {product.comingSoon ? "Coming Soon" : "Learn more"}
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
