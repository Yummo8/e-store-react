import React from 'react';

const ImgItemMobile = ({ img }) => {
  return (
    <div className="main-img__item">
      <img src={img.big} alt="mainImg" />
    </div>
  );
};

export default ImgItemMobile;
