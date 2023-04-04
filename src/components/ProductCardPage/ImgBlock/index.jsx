import React from 'react';

import { CustomSlider } from '../../General';
import ImgItemMobile from './ImgItemMobile';

export const ImgBlock = ({ images, device }) => {
  const [currentId, setCurrentId] = React.useState(1);
  const [selectedImg, setSelectedImg] = React.useState('');

  React.useEffect(() => {
    setSelectedImg(images.find((img) => img.id === currentId).big);
  }, [currentId]);

  const onPreviewImgClick = (id) => () => {
    setCurrentId(id);
  };

  return (
    <div className="product-card__images">
      {!device.isTablet ? (
        <>
          <div className="preview-img">
            {images.map((img, index) => (
              <div
                className={
                  img.id === currentId ? 'preview-img__item active' : 'preview-img__item'
                }
                key={index}
                onClick={onPreviewImgClick(img.id)}
              >
                <img src={img.preview} alt="previewImg" />
              </div>
            ))}
          </div>
          <div className="main-img">
            <div className="main-img__item">
              <img src={selectedImg} alt="mainImg" />
            </div>
          </div>
        </>
      ) : (
        <div className="slider__wrapper">
          <CustomSlider type="images">
            {images.map((img) => (
              <ImgItemMobile key={img.id} img={img} />
            ))}
          </CustomSlider>
        </div>
      )}
    </div>
  );
};
