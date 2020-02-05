import React from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
} from 'react-share';
import { createEmail, parseElements } from '../../utils/emailTemplate';

import './SocialShare.css';

const SocialShare = ({ details }) => {
  const {
    name, population, region, capital, timezones, currencies,
  } = details;
  const shareURL = 'http://www.localhost:3000';
  const shareTitle = `Information about ${details.name}:`;
  const currenciesEmail = parseElements(currencies);
  const timeZonesEmail = parseElements(timezones);

  const emailTempl = createEmail(
    name, population, region, capital, currenciesEmail, timeZonesEmail,
  );


  return (
    <div className="social-container">
      <EmailShareButton
        subject={shareTitle}
        body={emailTempl}
        url={shareURL}
      >
        <div>
          <EmailIcon
            round
            size={40}
          />
        </div>
      </EmailShareButton>
      <FacebookShareButton
        quote={emailTempl}
        url={shareURL}
        separator=" "
      >
        <div>
          <FacebookIcon
            size={40}
            round
          />
        </div>
      </FacebookShareButton>
      <TwitterShareButton
        title={emailTempl}
        hashtags={['hello', 'world', `${details.name}`]}
        url={shareURL}
      >
        <div>
          <TwitterIcon
            size={40}
            round
          />
        </div>
      </TwitterShareButton>
      <WhatsappShareButton
        url={shareURL}
        title={emailTempl}
        separator=" "
      >
        <div>
          <WhatsappIcon
            size={40}
            round
          />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

SocialShare.propTypes = {
  details: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
    })),
    flag: PropTypes.string,
    name: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    population: PropTypes.number,
    latlng: PropTypes.arrayOf(PropTypes.number),
    timezones: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};


export default SocialShare;
