import React from 'react';

import { Button } from '@mui/material';
import { Arrow } from '../../../assets/img/general';

export const SectionTitle = ({ titleText, button }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__text">{titleText}</h2>
      {button && (
        <a className="section-title__link">
          <Button className="section-title__button" endIcon={<Arrow />}>
            <p className="section-title__button-text">See All</p>
          </Button>
        </a>
      )}
    </div>
  );
};
