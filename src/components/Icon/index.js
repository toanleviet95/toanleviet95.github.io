import React from 'react';
import StyledIcon from './styled';

// eslint-disable-next-line react/prop-types
const Icon = ({ src, name, width }) => (
  <StyledIcon width={width}>
    <img src={src} alt={name} />
  </StyledIcon>
  );

export default Icon;
