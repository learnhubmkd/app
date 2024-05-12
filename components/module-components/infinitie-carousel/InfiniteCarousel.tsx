'use client';

import multipliedArray from './InfiniteCarouselData';
import style from './infiniteCarousel.module.scss';

const InfiniteCarousel = () => {
  return (
    <div className={style.slider}>
      <div className={style.slideTrack}>
        {multipliedArray.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={style.slide} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;