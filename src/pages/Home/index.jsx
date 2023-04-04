import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../redux/slices/productSlice/fetching";
import { selectProductsData } from "../../redux/slices/productSlice";
import { routes } from "../../utils";

import { Brands, Sale, Categories, Promotions, Blogs } from "../../components/Home";
import { Loader, Taglines } from "../../components/General";

export const Home = ({ device }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector(selectProductsData);

  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      await dispatch(fetchCategories()).unwrap();
    } catch (err) {
      navigate(routes.pageNotFound, { replace: true, state: { serverError: true } });
    }
  };

  return (
    <>
      <div className="container">
        <div className="home__wrapper">
          <Brands />
          <Sale />
          {categories.status === "success" ? <Categories categories={categories.data} device={device} /> : <Loader />}
          <Promotions device={device} />
          <Blogs device={device} />
          <Taglines />
        </div>
      </div>
      <Outlet />
    </>
  );
};
