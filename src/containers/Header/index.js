import React from 'react';
import StyledHeader from './styled';

// eslint-disable-next-line react/prop-types
const Header = ({ text }) => (
  <StyledHeader>
    {text}
  </StyledHeader>
  );

export default Header;
