"use client"
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

const BtnsWorkSlider = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
    return (
      <div className={containerStyles}>
        <button className={btnStyles}>
          <PiCaretLeftBold className={iconsStyles} onClick={() => swiper.slidePrev()} />
        </button>
  
        <button className={btnStyles}>
          <PiCaretRightBold className={iconsStyles}  onClick={() => swiper.slideNext()}/>
        </button>
      </div>
    );
}

export default BtnsWorkSlider;
