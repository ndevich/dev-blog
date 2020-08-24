import React from 'react';
import office from '../../static/images/office.jpg';

import '../views.css';

const News = (): JSX.Element => (
  <div className="header">
    <div className="header-image">
      <img src={office} style={{ width: '100%' }} />
    </div>
    <div className="header-text">News</div>
  </div>
);

export default News;
