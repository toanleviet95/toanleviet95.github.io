import React from 'react';

// eslint-disable-next-line react/prop-types
const PrintButton = ({ onPrint }) => (
  <button onClick={onPrint} type='button'>
    Print it
  </button>
  );

export default PrintButton;
