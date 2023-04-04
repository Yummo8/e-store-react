import React from 'react';

import { SectionTitle } from '../../../components/General';
import CategoryProductItem from './CategoryProductItem';
import { CustomSlider } from '../../General/Slider';

const CategoryList = ({ title, products, device }) => {
  return (
    <>
      <SectionTitle titleText={title} button={true} />
      <div className="categories-list">
        {!device.isTablet ? (
          products.map((item) => <CategoryProductItem key={item.id} item={item} />)
        ) : (
          <div className="slider__wrapper">
            <CustomSlider type="categories">
              {products.map((item) => (
                <CategoryProductItem key={item.id} item={item} />
              ))}
            </CustomSlider>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryList;
