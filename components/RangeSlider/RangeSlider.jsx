import React, { useState, useEffect, useContext } from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import styles from "../../pages/semaglutide/Semaglutide.styles.module.scss";

const RangeSlider = () => {

    const [sliderValue, setSliderValue] = useState(100);
    const [sliderValueCalculated, setsliderValueCalculated] = useState(16);

    const handleChange = (value) => {
        setSliderValue(value);
        setsliderValueCalculated(Math.ceil(value / 6.66));
    };

  return (
      <>
          <div className={`${styles['calc-right']} w-100 d-block`}>
              <div className={`${styles['calc-right-top']} w-100 d-block`}>
                  <div className={`${styles['title-row-1']} w-100 d-block fw-medium`}>Select your<br/>Current weight
                      <div className={`fw-bold bold-text ${styles['bold-text']}`}>
                          <output>{ sliderValue }</output> <span>lbs</span></div>
                  </div>
                  <div className={`${styles['range-slider-row']} w-100 d-block`}>
                      <Slider
                          value={sliderValue}
                          orientation="horizontal"
                          onChange={handleChange}
                          min={100}
                          max={300}
                          step={1}
                      />
                  </div>
                  <div className={`${styles['title-row-1']} w-100 d-block fw-medium`}>Weight you<br/>could lose (lbs):
                      <div className={`fw-bold ${styles['bold-text']} bold-text`}>{ sliderValueCalculated } lbs</div>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea tte6nh commodo consequat. Duis aute
                  irure dolor in eteyyyou reprehenderit in voluptate velit esse cillum dolore euoip
                  fugiat nulla pariatur. e dolor in reprehenderit in teteye pivoluptate velit esse
                  cillum dolore eu fugiat nulla jtu ry pariatur.</p>
          </div>
      </>
  );
};

export default RangeSlider;
