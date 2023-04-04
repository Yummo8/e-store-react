import React from 'react';

import CategoryList from './CategoryList';

export const Categories = ({ device, categories }) => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoryList key={item.id} device={device} {...item} />
      ))}
    </div>
  );
};
