import React from 'react';
import StyledCard from './styled';

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
  );

export default Card;
