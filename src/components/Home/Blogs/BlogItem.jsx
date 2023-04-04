import React from 'react';

const BlogItem = ({ blogImg, blogTitle, blogText, blogDate }) => {
  return (
    <div className="blogs-list__item">
      <div className="item__top">
        <img className="blog__img" src={blogImg} alt="blogImg" />
      </div>
      <div className="item__bottom">
        <h3 className="blog__title">{blogTitle}</h3>
        <p className="blog__text">{blogText}</p>
        <p className="blog__date">{blogDate}</p>
      </div>
    </div>
  );
};

export default BlogItem;
