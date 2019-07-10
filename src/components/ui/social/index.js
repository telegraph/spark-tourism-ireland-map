import React from 'react';
import fb from '../../../assets/share/fb.svg';
import twitter from '../../../assets/share/twitter.svg';
import mail from '../../../assets/share/mail.svg';
import './style.scss';

export default function Social({open}) {
  return (
    <div className={`social ${!open ? 'social--close': ''}`}>
      <a href="https://facebook.com/" className="share-btn addthis_button_facebook">
        <img className="fb" src={fb} alt="Share on facebook" />
      </a>
      <a href="https://twitter.com/" className="share-btn addthis_button_twitter">
        <img className="twitter" src={twitter} alt="Share on twitter" />
      </a>
      <a href=":mailto" className="share-btn addthis_button_mailto">
        <img className="mail" src={mail} alt="Share with mail" />
      </a>
    </div>
  );
}