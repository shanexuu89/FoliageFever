import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const  Button = styled(Link)`
background: ${({ primary }) => (primary ? '#000d1a' : '#CD853F')};
white-space: none;
font-weight: bold;
border: none;
min-width: 100px;
max-width: 200px;
cursor: pointer;
text-decoration: none;
transition:0.3s;
display: felx;
justify-content: center;
align-items: center;
padding: ${({ big}) => (big ? '16px 40px' : '10px 24px')};
color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
font-size: ${({ big }) => (big ? '20px' : '14px')};
&:hover {

    transition: all 0.2s ease-in-out;
    background: #3F5748;
    color: #fff;
}
`;