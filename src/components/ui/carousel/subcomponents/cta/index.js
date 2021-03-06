import React from 'react';
import './style.scss';

export default function CTA({isCtaVisible}) {
  return (
    <a className={`cta-banner ${!isCtaVisible ? 'cta-banner--hidden' : ''}`} href="https://ad.doubleclick.net/ddm/clk/447050861;250601378;c" target="_blank" rel="noreferrer noopener nofollow">
      <p>Come find your holiday at <span>ireland.com</span></p>
    </a>
  );
}