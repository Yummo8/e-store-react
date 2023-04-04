import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../utils/routes';

import { UserContactForm } from '../Forms';

export const UserContact = ({ isAuth, useContactForm }) => {
  return (
    <section className="user-contact__section">
      <div className="user-contact__top">
        <h4 className="user-contact__title">Contact information</h4>
        {!isAuth && (
          <div className="have-account">
            <p className="have-account__text">Already have an account?</p>
            <Link
              to={routes.signIn}
              state={{ fromPayment: true }}
              className="have-account__link"
            >
              <p className="have-account__link-text">Sign in</p>
            </Link>
          </div>
        )}
      </div>
      <div className="user-contact__form">
        <UserContactForm isAuth={isAuth} useContactForm={useContactForm} />
      </div>
    </section>
  );
};
