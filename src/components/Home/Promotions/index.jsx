import React from 'react';

import { promotions } from '../../../utils/data';

import { SectionTitle } from '../../../components/General';
import PromoItem from './PromoItem';
import { CustomSlider } from '../../General/Slider/index';

export const Promotions = ({ device }) => {
  return (
    <section className="promotions">
      <SectionTitle titleText="On Sale" button={true} />
      <div className="promotions-list">
        {!device.isTablet ? (
          promotions.map((item, index) => <PromoItem key={index} {...item} />)
        ) : (
          <div className="slider__wrapper">
            <CustomSlider type="promotions">
              {promotions.map((item, index) => (
                <PromoItem key={index} {...item} />
              ))}
            </CustomSlider>
          </div>
        )}
      </div>
    </section>
  );
};
