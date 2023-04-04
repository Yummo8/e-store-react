import React from 'react';

import { blogs } from '../../../utils/data';

import { SectionTitle } from '../../General';
import BlogItem from './BlogItem';
import { CustomSlider } from '../../General/Slider';

export const Blogs = ({ device }) => {
  return (
    <section className="blogs">
      <SectionTitle titleText="Blog" button={true} />
      <div className="blogs-list">
        {!device.isTablet ? (
          blogs.map((item, index) => <BlogItem key={index} {...item} />)
        ) : (
          <div className="slider__wrapper">
            <CustomSlider type="promotions">
              {blogs.map((item, index) => (
                <BlogItem key={index} {...item} />
              ))}
            </CustomSlider>
          </div>
        )}
      </div>
    </section>
  );
};
