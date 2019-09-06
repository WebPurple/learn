/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import IndexPageTemplate from '../../templates/index-page/template';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPageTemplate html={data.html} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
