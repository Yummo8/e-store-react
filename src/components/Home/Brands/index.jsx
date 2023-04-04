import React from 'react';

import banner from '../../../assets/img/home/banner.png';
import wmf from '../../../assets/img/home/wmf.png';
import xiaomi from '../../../assets/img/home/xiaomi.png';
import apple from '../../../assets/img/home/apple.png';
import lg from '../../../assets/img/home/lg.png';
import samsung from '../../../assets/img/home/samsung.png';

export const Brands = () => {
  return (
    <section className="brands">
      <img className="banner" src={banner} alt="banner" />
      <div className="brands-list">
        <div className="marquee">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="marquee__group">
              <img className="brands-list__item" src={wmf} alt="wmf" />
              <img className="brands-list__item" src={xiaomi} alt="xiaomi" />
              <img className="brands-list__item" src={apple} alt="apple" />
              <img className="brands-list__item" src={lg} alt="lg" />
              <img className="brands-list__item" src={samsung} alt="samsung" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
