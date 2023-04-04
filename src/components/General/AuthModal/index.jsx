import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../../redux/slices/userSlice';
import { routes, disableScroll, enableScroll } from '../../../utils';

import { AnimatePresence, motion } from 'framer-motion';
import { modalAnimation, formAnimation } from './utils/animation.settings';

import { SignUpForm, SignInForm } from './Forms';
import { MdOutlineClose } from 'react-icons/md';
import { LogoSvg } from '../../../assets/img/general';
import signUpBg from '../../../assets/img/general/auth-modal/sign-up.png';
import signInBg from '../../../assets/img/general/auth-modal/sign-in.png';

export const AuthModal = ({ modalType }) => {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const { footerEmail } = useSelector(selectUserData);

  const modalRef = React.useRef();
  const animationDelay = React.useRef(0.8);

  React.useEffect(() => {
    disableScroll();

    return () => {
      if (state?.fromPayment) {
        navigate(`${routes.cart}/${routes.payment}`, { replace: true });
      }

      enableScroll();
    };
  }, []);

  React.useEffect(() => {
    animationDelay.current = 0.25;
  }, [pathname]);

  const CloseModal = () => {
    navigate(routes.home, { replace: true });
  };

  const handleOutsideClick = (e) => {
    if (e.target !== modalRef.current) {
      return;
    }

    CloseModal();
  };

  const onCloseBtnClick = () => {
    CloseModal();
  };

  return (
    <AnimatePresence>
      <div className="auth-modal" id="modal" ref={modalRef} onClick={handleOutsideClick}>
        <motion.div className="auth-modal__container" {...modalAnimation.onOpen}>
          <div className="auth-modal__wrapper">
            <div className="modal__img">
              <img src={modalType === 'sign-up' ? signUpBg : signInBg} alt="modalImg" />
            </div>
            <div className="modal__body">
              <div className="modal__header">
                <div className="modal__header-logo">
                  <h1 className="logo-text">Elekta Store</h1>
                  <span className="logo-icon">
                    <LogoSvg />
                  </span>
                </div>
                <button className="modal-close__button" onClick={onCloseBtnClick}>
                  <span className="modal-close__button-icon">
                    <MdOutlineClose />
                  </span>
                </button>
              </div>
              <div className={`modal-form modal-form__${modalType}`}>
                <div className="modal-form__links">
                  <NavLink
                    to={routes.signUp}
                    className={({ isActive }) =>
                      isActive ? 'link__item active' : 'link__item'
                    }
                  >
                    <p className="link__item-text">Sign Up</p>
                  </NavLink>
                  <NavLink to={routes.signIn} className="link__item">
                    <p className="link__item-text">Sign In</p>
                  </NavLink>
                </div>
                <div className={`modal-form__fields ${modalType}__fields`}>
                  {modalType === 'sign-up' ? (
                    <SignUpForm
                      userEmail={footerEmail}
                      animation={formAnimation}
                      delay={animationDelay.current}
                    />
                  ) : (
                    <SignInForm
                      userEmail={footerEmail}
                      animation={formAnimation}
                      delay={animationDelay.current}
                      fromPayment={state?.fromPayment}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
