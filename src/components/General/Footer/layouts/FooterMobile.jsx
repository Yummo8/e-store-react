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
  ChevronRightFilled,
} from '../../../../assets/img/general';

export const FooterMobile = ({
  userEmail,
  onEmailChange,
  onSignUpBtnClick,
  footerLinks,
}) => {
  const [sectionActive, setSectionActive] = React.useState(false);

  const onSectionClick = () => {
    setSectionActive((prev) => !prev);
  };

  return (
    <div className="footer__top">
      <section
        className={
          sectionActive ? 'footer-contacts__section active' : 'footer-contacts__section'
        }
        onClick={onSectionClick}
      >
        <h4 className="contacts-section__title">Contact Us</h4>
        <span className="chevron">
          <ChevronRightFilled />
        </span>
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
      <section className="subscribe-section__links-mobile">
        <h3 className="links__title">Our social media</h3>
        <div className="links__icons">
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
