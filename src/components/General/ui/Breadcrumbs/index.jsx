import React from 'react';
import { Link } from 'react-router-dom';

import { ChevronRightFilled } from '../../../../assets/img/general';

export const Breadcrumbs = ({ items, currentPage }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index, arr) => (
        <Link
          to={item.path}
          className={
            index === arr.length - 1 ? 'breadcrumbs__item last-item' : 'breadcrumbs__item'
          }
          key={item.id}
        >
          <p className="breadcrumbs__item-text">{item.title}</p>
          <span className="breadcrumbs__item-icon">
            <ChevronRightFilled width="20" height="20" color="#BDBDBD" />
          </span>
        </Link>
      ))}
      <p className="breadcrumbs__item-text">{currentPage}</p>
    </div>
  );
};
