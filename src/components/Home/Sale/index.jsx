import React from 'react';

import { SectionTitle } from '../../General';
import { Button } from '@mui/material';
import saleWatches from '../../../assets/img/home/sale_watches.png';
import saleHeadphones from '../../../assets/img/home/sale_headphones.png';
import salePhone from '../../../assets/img/home/sale_phone.png';
import saleLaptop from '../../../assets/img/home/sale_laptop.png';

export const Sale = () => {
  return (
    <section className="sale">
      <SectionTitle titleText="Sale up to -50%" button={true} />
      <div className="sale-products">
        <div className="sale-products__item product-1">
          <img className="product__img" src={saleWatches} alt="saleWatches" />
          <Button className="product__button" variant="contained">
            <p className="product__button-text">Shop now</p>
          </Button>
        </div>
        <div className="sale-products__item product-2">
          <div className="discount">
            <h3 className="discount__title">Sale</h3>
            <div className="discount__percent">
              <p className="discount__percent-text">50%</p>
            </div>
          </div>
          <img className="product__img" src={saleHeadphones} alt="saleHeadphones" />
          <Button className="product__button" variant="contained">
            <p className="product__button-text">Shop now</p>
          </Button>
        </div>
        <div className="sale-products__item product-3">
          <img className="product__img" src={salePhone} alt="salePhone" />
          <Button className="product__button" variant="contained">
            <p className="product__button-text">Shop now</p>
          </Button>
        </div>
        <div className="sale-products__item product-4">
          <img className="product__img" src={saleLaptop} alt="saleLaptop" />
          <Button className="product__button" variant="contained">
            <p className="product__button-text">Shop now</p>
          </Button>
        </div>
      </div>
    </section>
  );
};
