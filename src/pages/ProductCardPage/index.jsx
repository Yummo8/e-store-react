import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSelectedProduct,
  fetchSimilarProducts,
} from '../../redux/slices/productSlice/fetching';
import { selectProductsData } from '../../redux/slices/productSlice';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { routes } from '../../utils';

import {
  ImgBlock,
  ProductInfo,
  ProductItem,
  ProductReviews,
} from '../../components/ProductCardPage';
import { SectionTitle, Taglines, Loader, CustomSlider } from '../../components/General';
import { Breadcrumbs } from '../../components/General/ui';

export const ProductCardPage = ({ device }) => {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, similarProducts } = useSelector(selectProductsData);

  React.useEffect(() => {
    getSelectedProduct(product_id);
  }, [product_id]);

  useDidMountEffect(() => {
    if (selectedProduct.status === 'success') {
      getSimiliarProducts(selectedProduct.data.category_id);
    }
  }, [selectedProduct]);

  const getSelectedProduct = async (id) => {
    try {
      await dispatch(fetchSelectedProduct(id)).unwrap();
    } catch (err) {
      navigate(routes.pageNotFound, { replace: true });
    }
  };

  const getSimiliarProducts = async (category_id) => {
    try {
      await dispatch(fetchSimilarProducts(category_id)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  if ([selectedProduct, similarProducts].some((item) => item.status !== 'success')) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="product-card__wrapper">
        <Breadcrumbs
          items={selectedProduct.data.breadcrumbs}
          currentPage={selectedProduct.data.title}
        />
        <div className="product-card">
          <ImgBlock images={selectedProduct.data.images} device={device} />
          <ProductInfo item={selectedProduct.data} />
        </div>
        <section className="similar-products__section">
          <SectionTitle titleText="Similar Products" button={true} />
          <div className="slider__wrapper">
            <CustomSlider>
              {similarProducts.data.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))}
            </CustomSlider>
          </div>
        </section>
        <section className="reviews-section">
          <SectionTitle titleText="Reviews" button={false} />
          <ProductReviews />
        </section>
        <Taglines />
      </div>
    </div>
  );
};
