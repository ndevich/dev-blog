import React from 'react';

import office from '../../static/images/office.jpg';

import '../views.css';

const About = (): JSX.Element => (
  <div className="header">
    <div className="header-image">
      <img alt="about-header" src={office} />
    </div>
    <div className="header-text">about</div>
  </div>
);

export default About;
