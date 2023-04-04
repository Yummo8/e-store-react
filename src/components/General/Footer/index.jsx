import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setFooterEmail } from '../../../redux/slices/userSlice';
import { selectDeviceData } from '../../../redux/slices/deviceSlice';
import { routes } from '../../../utils/routes';
import { footerLinks } from '../../../utils/data';

import { FooterDesktop, FooterMobile } from './layouts';
import applePay from '../../../assets/img/general/apple_pay.png';
import mastercard from '../../../assets/img/general/mastercard.png';
import visa from '../../../assets/img/general/visa.png';
import paypal from '../../../assets/img/general/paypal.png';

export const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const device = useSelector(selectDeviceData);

  const [userEmail, setUserEmail] = React.useState('');

  const onEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const onSignUpBtnClick = () => {
    userEmail && dispatch(setFooterEmail(userEmail));
    setUserEmail('');

    navigate(routes.signUp, { replace: true });
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        {!device.isTablet ? (
          <FooterDesktop
            userEmail={userEmail}
            onEmailChange={onEmailChange}
            onSignUpBtnClick={onSignUpBtnClick}
            footerLinks={footerLinks}
          />
        ) : (
          <FooterMobile
            userEmail={userEmail}
            onEmailChange={onEmailChange}
            onSignUpBtnClick={onSignUpBtnClick}
            footerLinks={footerLinks}
          />
        )}
        <span className="footer__separator" />
        <div className="footer__bottom">
          <h5 className="footer__copyright">Copyright 2022@Technology Corporation</h5>
          <div className="footer__payments">
            <img className="footer__payments-icon" src={mastercard} alt="paymentImg" />
            <img className="footer__payments-icon" src={applePay} alt="paymentImg" />
            <img className="footer__payments-icon" src={visa} alt="paymentImg" />
            <img className="footer__payments-icon" src={paypal} alt="paymentImg" />
          </div>
        </div>
      </div>
    </footer>
  );
};
