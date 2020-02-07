import React from 'react';

const currentDate = new Date();

const FooterPresentational = props => {
  return <div>Data provided by Marvel. © { currentDate.getFullYear() } Marvel</div>;
};

export default FooterPresentational;
