import React from 'react';
import { StyledSegment, StyledSummary, StyledMenu } from './styled';

// eslint-disable-next-line react/prop-types
const Summary = () => (
  <StyledSegment>
    <StyledMenu>
      <div className='fakeButtons fakeClose' />
      <div className='fakeButtons fakeMinimize' />
      <div className='fakeButtons fakeZoom' />
    </StyledMenu>
    <StyledSummary>
      <p className='line1'>
        $ Hi! I am Toan
      </p>
      <p className='line2'>
        $ A developer loving technology with 4+ years experience
        <br />
        $ Learning something new day by day
      </p>
      <p className='line3'>
        $ Hope my knowledge
        will contribute to your product...
      </p>
      <p className='line4'>
        &gt;
        <span className='cursor4'>_</span>
      </p>
    </StyledSummary>
  </StyledSegment>
  );

export default Summary;
