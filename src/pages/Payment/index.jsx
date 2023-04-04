import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { selectCartData } from '../../redux/slices/cartSlice';
import { selectOrderData } from '../../redux/slices/orderSlice';
import { orderSchema } from '../../utils/validation/schemas';
import { routes } from '../../utils/routes';

import { Breadcrumbs } from '../../components/General/ui';
import { SectionTitle } from '../../components/General';
import { UserContact, PaymentMethod, TotalOrderInfo } from '../../components/Payment';

const breadcrumbs = [
  {
    id: 911,
    title: 'Shopping Cart',
    path: routes.cart,
  },
];

export const Payment = ({ isAuth }) => {
  const navigate = useNavigate();
  const { cart } = useSelector(selectCartData);
  const { paymentType } = useSelector(selectOrderData);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(orderSchema(paymentType)),
  });

  React.useEffect(() => {
    if (!cart.quantity) {
      navigate(routes.cart, { replace: true });
    }
  }, []);

  return (
    <div className="container">
      <div className="payment__wrapper">
        <Breadcrumbs items={breadcrumbs} currentPage="Payment" />
        <SectionTitle titleText="Payment" />
        <div className="order__payment">
          <div className="payment">
            <UserContact isAuth={isAuth} useContactForm={{ register, errors }} />
            <PaymentMethod usePaymentForm={{ register, errors }} />
          </div>
          <TotalOrderInfo
            cart={cart}
            paymentType={paymentType}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
