import React from 'react';

import office from '../../static/images/office.jpg';

import '../views.css';

const Media = (): JSX.Element => (
  <div className="header">
    <div className="header-image">
      <img alt="media-header" src={office} />
    </div>
    <div className="header-text">Media</div>
  </div>
);

export default Media;
