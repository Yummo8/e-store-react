import React from 'react';
import { useDispatch } from 'react-redux';

import { setPaymentType } from '../../../redux/slices/orderSlice';

import { payments } from '../../../utils/data';

const Payments = () => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = React.useState(0);

  const onPaymentBtnClick =
    (id, { name }) =>
    () => {
      setCurrentId(id);
      dispatch(setPaymentType(name));
    };

  return (
    <div className="payment-method__payments">
      {payments.map((item, index) => (
        <button
          className={currentId === index ? 'payments__item active' : 'payments__item'}
          key={index}
          onClick={onPaymentBtnClick(index, item)}
        >
          <img src={item.img} alt="paymentImg" className="payments__item-img" />
        </button>
      ))}
    </div>
  );
};

export default Payments;
