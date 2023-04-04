import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectDeviceData } from '../../../redux/slices/deviceSlice/index';

import { ChevronRightFilled } from '../../../assets/img/general';

const FooterLinks = ({ sectionTitle, sectionLinks }) => {
  const device = useSelector(selectDeviceData);

  const [sectionActive, setSectionActive] = React.useState(false);

  const onSectionClick = () => {
    setSectionActive((prev) => !prev);
  };

  return device.isTablet ? (
    <section
      className={sectionActive ? 'footer-links__section active' : 'footer-links__section'}
      onClick={onSectionClick}
    >
      <h4 className="links-section__title">{sectionTitle}</h4>
      <span className="chevron">
        <ChevronRightFilled />
      </span>
      <div className="links-section__menu">
        <ul>
          {sectionLinks.map((link, index) => (
            <Link to={link.path} key={index} className="section-menu__link">
              <li className="section-menu__item">
                <p className="section-menu__item-text">{link.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className="footer-links__section">
      <h4 className="links-section__title">{sectionTitle}</h4>
      <div className="links-section__menu">
        <ul>
          {sectionLinks.map((link, index) => (
            <Link to={link.path} key={index} className="section-menu__link">
              <li className="section-menu__item">
                <p className="section-menu__item-text">{link.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FooterLinks;
