import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectDeviceData } from './redux/slices/deviceSlice';
import { selectAuthData } from './redux/slices/authSlice';
import { useSetDeviceType } from './hooks';
import { routes } from './utils/routes';

import { WithHeader, WithFooter } from './layouts';
import { AuthModal, Loader } from './components/General';

const Home = React.lazy(() =>
  import('./pages').then((module) => ({ default: module.Home }))
);
const ProductCardPage = React.lazy(() =>
  import('./pages').then((module) => ({ default: module.ProductCardPage }))
);
const Cart = React.lazy(() =>
  import('./pages').then((module) => ({ default: module.Cart }))
);
const Payment = React.lazy(() =>
  import('./pages').then((module) => ({ default: module.Payment }))
);
const PageNotFound = React.lazy(() =>
  import('./pages').then((module) => ({ default: module.PageNotFound }))
);

function App() {
  const device = useSelector(selectDeviceData);
  const { isAuth } = useSelector(selectAuthData);

  useSetDeviceType();

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<WithHeader device={device} isAuth={isAuth} />}>
          <Route element={<WithFooter />}>
            <Route path={routes.home} element={<Home device={device} />}>
              <Route path={routes.signUp} element={<AuthModal modalType="sign-up" />} />
              <Route path={routes.signIn} element={<AuthModal modalType="sign-in" />} />
            </Route>
            <Route
              path={routes.productCard}
              element={<ProductCardPage device={device} />}
            />
          </Route>
          <Route path={routes.cart}>
            <Route index element={<Cart />} />
            <Route path={routes.payment} element={<Payment isAuth={isAuth} />} />
          </Route>
        </Route>
        <Route path={routes.pageNotFound} element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
