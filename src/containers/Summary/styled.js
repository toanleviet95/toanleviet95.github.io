import styled from 'styled-components';

const StyledSegment = styled.div `
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid #000000;
    box-shadow: 5px 6px 0px #000000;
    border-radius: 4px;
    height: 100%;
`;

const StyledMenu = styled.div `
    width: 100%;
    box-sizing: initial;
    border-bottom: 1px solid #000000;
    padding: 6px 0;
    .fakeButtons {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        border: 1px solid #000;
        position: relative;
        left: 6px;
        background-color: #fff;
        border-color: #000;
        display: inline-block;
    }
    
    .fakeMinimize {
        left: 11px;
        box-shadow: inset 0 0 0 1000px #000;
        border-color: #000;
    }
    
    .fakeZoom {
        left: 16px;
        background-color: #fff;
        border-color: #000;
    }
`;

const StyledSummary = styled.div `
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    p {
        position: relative;
        font-size: 0.9em;
        font-family: monospace;
        white-space: normal;
        overflow: hidden;
        padding: 0 16px;
      }
      
      span {
        color: #fff;
        font-weight: bold;
      }
      
      .line1 {
        color: #000;
      }
      
      
      .line2 {
        color: #000;
      }
      
      
      .line3 {
        color: #000;
      }

      
      .line4 {
        color: #000;
      }

      .cursor4 {
        color: #000;
      }
`;

export {
    StyledSegment,
    StyledSummary,
    StyledMenu,
};
