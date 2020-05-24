import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
    h2,h3,h4,h5,h6 {
        font-family: ${props => props.theme.titleFont};
        font-weight: bold;
        font-size: 1.2em;
        text-align: center;
    }
    .about {
        font: 100% ${props => props.theme.mainFont};
        
        .wrapper {
            padding: 2%;
        }
        
        .social-me {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            margin: 5%;
            img {
                height: 3em;
            }
            li {
                text-align: center;
            }
        }
        
        .about-me, .skills {
            border-radius: ${props => props.theme.drawnBorder};
            border: solid 5px ${props => props.theme.colorOne};
            background: ${props => props.theme.colorTwo};
            ul {
                list-style: none;
                text-align: center;
            }
        }
    }
        
    /*---Media Queries---*/
    
    @media only screen and (min-width: 768px) {
        .about {
            padding: 0;
        }
    
        .about-me, .skills {
            margin: 0 5%;
        }
    }
    
    
    @media only screen and (min-width: 1280px) {
        .about {
            font-size: 150%;
            justify-content: center;
            align-content: center;
        }
    }
    
    @media (max-width: 768px) {
        .wrapper {
            margin: 12px;
        }
    }

    @media print {
        .about {page-break-after: always;}
        @page {
            size: portrait;
        }
    }
`;

export default StyledGlobal;
