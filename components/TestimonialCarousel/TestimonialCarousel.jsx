'use client';
import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import pageStyles from "./Testimonial.styles.module.scss";

const TestimonialCarousel = () => {
  return (
      <>
        <div className={`${pageStyles['testimonial-section']} w-100 d-block`}>
          <div className={`container ${pageStyles['container']}`}>
            <h3>Don’t take our word for it - Read what real men
              have to say about <span>Enclomiphene</span></h3>
            <div className={`${pageStyles['data-row']} w-100 d-block`}>
                <ReactOwlCarousel
                    nav={false}
                    className={`${pageStyles['testimonial-slider']}`}
                    autoplayTimeout={7000}
                    autoplay={true}
                    dots={true}
                    margin={0}
                    items={1}
                    loop={true}
                    autoplaySpeed={3000}
                    navSpeed={600}
                >
                    <div className={`${pageStyles['testimonial-box']} w-100 d-block horizontal-center`}>
                        <div className={`${pageStyles['rating']} w-100 d-block`}><img
                            src="/assets/enclomiphene/icon-star.png" alt=""/>
                        </div>
                        <div className={`${pageStyles['testimonial-title']} w-100 fw-semibold d-block`}>Incredible
                            results
                        </div>
                        <p>This is my first attempt at increasing my testosterone levels, and I can honestly say that
                            I’ve made the right choice. Not only were the products incredibly effective, but the entire
                            experience with UltraPharmRx gave me confidence that I was on the right track.</p>
                        <div className={`${pageStyles['customer-name']} w-100 d-block fw-semibold`}>James Davies</div>
                        <div
                            className={`${pageStyles['verified-badge']} verified-badge w-100 d-block fw-medium`}>Verified
                            Buyer
                        </div>
                    </div>
                    <div className={`${pageStyles['testimonial-box']} w-100 d-block horizontal-center`}>
                        <div className={`${pageStyles['rating']} w-100 d-block`}><img
                            src="/assets/enclomiphene/icon-star.png" alt=""/>
                        </div>
                        <div className={`${pageStyles['testimonial-title']} w-100 fw-semibold d-block`}>Incredible
                            results
                        </div>
                        <p>This is my first attempt at increasing my testosterone levels, and I can honestly say that
                            I’ve made the right choice. Not only were the products incredibly effective, but the entire
                            experience with UltraPharmRx gave me confidence that I was on the right track.</p>
                        <div className={`${pageStyles['customer-name']} w-100 d-block fw-semibold`}>James Davies</div>
                        <div
                            className={`${pageStyles['verified-badge']} verified-badge w-100 d-block fw-medium`}>Verified
                            Buyer
                        </div>
                    </div>
                    <div className={`${pageStyles['testimonial-box']} w-100 d-block horizontal-center`}>
                        <div className={`${pageStyles['rating']} w-100 d-block`}><img
                            src="/assets/enclomiphene/icon-star.png" alt=""/>
                        </div>
                        <div className={`${pageStyles['testimonial-title']} w-100 fw-semibold d-block`}>Incredible
                            results
                        </div>
                        <p>This is my first attempt at increasing my testosterone levels, and I can honestly say that
                            I’ve made the right choice. Not only were the products incredibly effective, but the entire
                            experience with UltraPharmRx gave me confidence that I was on the right track.</p>
                        <div className={`${pageStyles['customer-name']} w-100 d-block fw-semibold`}>James Davies</div>
                        <div
                            className={`${pageStyles['verified-badge']} verified-badge w-100 d-block fw-medium`}>Verified
                            Buyer
                        </div>
                    </div>
                    <div className={`${pageStyles['testimonial-box']} w-100 d-block horizontal-center`}>
                        <div className={`${pageStyles['rating']} w-100 d-block`}><img
                            src="/assets/enclomiphene/icon-star.png" alt=""/>
                        </div>
                        <div className={`${pageStyles['testimonial-title']} w-100 fw-semibold d-block`}>Incredible
                            results
                        </div>
                        <p>This is my first attempt at increasing my testosterone levels, and I can honestly say that
                            I’ve made the right choice. Not only were the products incredibly effective, but the entire
                            experience with UltraPharmRx gave me confidence that I was on the right track.</p>
                        <div className={`${pageStyles['customer-name']} w-100 d-block fw-semibold`}>James Davies</div>
                        <div
                            className={`${pageStyles['verified-badge']} verified-badge w-100 d-block fw-medium`}>Verified
                            Buyer
                        </div>
                    </div>
                    <div className={`${pageStyles['testimonial-box']} w-100 d-block horizontal-center`}>
                        <div className={`${pageStyles['rating']} w-100 d-block`}><img
                            src="/assets/enclomiphene/icon-star.png" alt=""/>
                        </div>
                        <div className={`${pageStyles['testimonial-title']} w-100 fw-semibold d-block`}>Incredible
                            results
                        </div>
                        <p>This is my first attempt at increasing my testosterone levels, and I can honestly say that
                            I’ve made the right choice. Not only were the products incredibly effective, but the entire
                            experience with UltraPharmRx gave me confidence that I was on the right track.</p>
                        <div className={`${pageStyles['customer-name']} w-100 d-block fw-semibold`}>James Davies</div>
                        <div
                            className={`${pageStyles['verified-badge']} verified-badge w-100 d-block fw-medium`}>Verified
                            Buyer
                        </div>
                    </div>
                </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </>
  );
};

export default TestimonialCarousel;
