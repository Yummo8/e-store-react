import React from 'react';

import { Button } from '@mui/material';
import { Arrow } from '../../../assets/img/general';

const PromoItem = ({ promoImg, promoDaysAmount, promoTerms }) => {
  return (
    <div className="promotions-list__item">
      <div className="item__top">
        <img className="promotion__img" src={promoImg} alt="promotionImg" />
        <div className="promotion__days">
          <p className="promotion__days-amount">{promoDaysAmount}</p>
          <p className="promotion__days-text">
            days
            <br />
            end of promotion
          </p>
        </div>
      </div>
      <div className="item__bottom">
        <div className="promotion-terms">
          <p className="promotion-terms__text">The promotion is valid {promoTerms}</p>
          <Button className="promotion-terms__button" endIcon={<Arrow />}>
            <p className="promotion-terms__button-text">Show More</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoItem;
