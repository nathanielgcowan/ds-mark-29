import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />

    <p className="lead" data-testid="hero-lead">
      "If I could say it in words there would be no reason to paint."
      <a href="https://nextjs.org">Edward Hopper</a>
    </p>
  </div>
);

export default Hero;
