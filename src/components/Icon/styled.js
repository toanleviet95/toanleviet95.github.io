import styled from 'styled-components';

const StyledIcon = styled.span`
    display: inline-flex;
    margin-right: 6px;
    img {
        width: ${props => props.width}
    }
`;

export default StyledIcon;
