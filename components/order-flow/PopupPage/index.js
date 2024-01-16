import React, { useState } from "react";
import styles from "./styles.module.scss";
import clock from "../../../public/assets/order/Image 54.png";
import fwd from "../../../public/assets/order/down-arrow.png";
import DisabledFwd from "../../../public/assets/order/down-arrow (4).png";
import disabledbackArrow from "../../../public/assets/order/down-arrow (3).png";
import BackArrow from "../../../public/assets/order/down-arrow (2).png";
import bg4 from "../../../public/assets//order/IMAGE4.png"
import bg3 from "../../../public/assets//order/IMAGE3.png"
import bg2 from "../../../public/assets//order/IMAGE2.png"
import bg1 from "../../../public/assets//order/IMAGE.png"

import { Button } from "react-bootstrap";
import Image from "next/image";

const Modal = ({ isOpen, onClose }) => {
  const [stepNo, setstepNo] = useState(1);
  return (
    <>
      {isOpen && (
        <div>
          <div className={styles.overlayStyle} onClick={onClose} />
          <div className={styles.modalStyle}>
            {/* Cross button */}
            <button
              style={{
                position: "absolute",
                top: "-50px",
                right: "0px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "40px",
                color: "white",
                zIndex: "100",
              }}
              onClick={onClose}
            >
              &times;
            </button>
           {stepNo !== 1 && <div
              style={{
                position: "absolute",
                bottom: "25px",
                right: "30px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                zIndex: "100",

              }}
            >
              <span className={styles.backArrow} onClick={()=> setstepNo(stepNo-1)}>
                <div>
                <Image src={stepNo === 2 ? disabledbackArrow : BackArrow} />
                </div>
              </span>
              <span className={styles.fwdArrow} onClick={()=> stepNo < 4 ? setstepNo(stepNo+1) : ''}>
                <div>
                  <Image src={stepNo === 4 ?DisabledFwd : fwd } />
                </div>
              </span>
            </div>}
            {/* Modal content goes here */}
            {stepNo === 1 && (
              <div className={styles.mainBox1}>
              <div className={styles.modalImg} >
                <Image src={bg1} >

                </Image>
              </div>
                <h3>Find your Treatment </h3>
                <p>
                  Let’s help you find the correct treatment to hit your goals{" "}
                </p>
                <Button variant="primary" onClick={() => setstepNo(2)}>
                  Get Started
                </Button>
                <div className={styles.imgGroup}>
                  <div>
                    <Image src={clock} />
                  </div>
                  <p>Take 20 sec</p>
                </div>
              </div>
            )}

            {stepNo === 2 && (
              <div className={styles.mainBox2}>
              <div className={styles.modalImg} >
                <Image src={bg2}>

                </Image>
              </div>
                <div>
                  <h5>What’s your email address?</h5>
                  <p>
                    We need this to provide more personalized treatment options
                  </p>
                  <input type="text" placeholder="name@example.com"></input>
                  <Button variant="primary" onClick={() => setstepNo(3)}>
                    next
                  </Button>
                </div>
              </div>
            )}
            {stepNo === 3 && (
              <div className={styles.mainBox3}>
              <div className={styles.modalImg} >
                <Image src={bg3}>

                </Image>
              </div>
                <div>
                  <h5>What’s your first name and last name?</h5>

                  <input
                    type="text"
                    placeholder="Type your answer here..."
                  ></input>
                  <Button variant="primary" onClick={() => setstepNo(4)}>
                    next
                  </Button>
                </div>
              </div>
            )}
            {stepNo === 4 && (
              <div className={styles.mainBox4}>
              <div className={styles.modalImg} >
                <Image src={bg4}>

                </Image>
              </div>
                <div>
                  <h5>What would you like help with?</h5>
                  <p>
                    This will allow us to recommend the most appropriate
                    treatment for you
                  </p>
                  <span>
                    <input type="checkbox"></input>
                    <p>
                      I want harder, higher quality erections and more sexual
                      performance
                    </p>
                  </span>
                  <span>
                    <input type="checkbox"></input>
                    <p>I want to increase my testosterone levels</p>
                  </span>
                  <span>
                    <input type="checkbox"></input>
                    <p>
                      I want to regrow my hair or help with thinning/receding
                      hairline
                    </p>
                  </span>
                  <span>
                    <input type="checkbox"></input>
                    <p>I want to lose weight</p>
                  </span>

                  <Button variant="primary">next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
