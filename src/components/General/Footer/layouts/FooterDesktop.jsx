import React from 'react';
import { Link } from 'react-router-dom';

import FooterLinks from '../FooterLinks';
import {
  PhoneSvg,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from '../../../../assets/img/general';

export const FooterDesktop = ({
  userEmail,
  onEmailChange,
  onSignUpBtnClick,
  footerLinks,
}) => {
  return (
    <div className="footer__top">
      <section className="footer-contacts__section">
        <h4 className="contacts-section__title">Contact Us</h4>
        <div className="contacts-section__menu">
          <ul>
            <li className="section-menu__item">
              <span className="section-menu__item-icon">
                <PhoneSvg />
              </span>
              <p className="section-menu__item-text">+1-642-969-4748</p>
            </li>
            <li className="section-menu__item">
              <span className="section-menu__item-icon">
                <Mail />
              </span>
              <p className="section-menu__item-text">elekta.store@gmail.com</p>
            </li>
            <li className="section-menu__item">
              <span className="section-menu__item-icon">
                <MapPin />
              </span>
              <p className="section-menu__item-text">
                67730 Golden Burgs Vincetown, HI 50498
              </p>
            </li>
          </ul>
        </div>
      </section>
      {footerLinks.map((item, index) => (
        <FooterLinks key={index} {...item} />
      ))}
      <section className="footer-subscribe__section">
        <h4 className="subscribe-section__title">Subscribe Now</h4>
        <div className="subscribe-section__form">
          <div className="section-form__email">
            <input
              type="text"
              placeholder="Enter your email"
              className="section-form__email-input"
              value={userEmail}
              onChange={onEmailChange}
            />
          </div>
          <button className="section-form__button" onClick={onSignUpBtnClick}>
            <p className="section-form__button-text">Sign Up</p>
          </button>
        </div>
        <div className="subscribe-section__links">
          <Link to="" className="section__link">
            <span className="section__link-icon">
              <Instagram />
            </span>
          </Link>
          <Link to="" className="section__link">
            <span className="section__link-icon">
              <Facebook />
            </span>
          </Link>
          <Link to="" className="section__link">
            <span className="section__link-icon">
              <Youtube />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};
