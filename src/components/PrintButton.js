import React from 'react';

// eslint-disable-next-line react/prop-types
const PrintButton = ({ onPrint }) => (
  <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={onPrint} type='button'>
    Print it
  </button>
  );

export default PrintButton;
