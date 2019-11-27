import styled from 'styled-components';

import background from '../../assets/12.jpg'

export const MainContainer = styled.main`
height: 100%;
width: 100%;
background: url(${background})  no-repeat center ;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;


&::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: #000;
    top: 0;
    opacity: 0.3;
}
`


export const AsideContainer = styled.div`
display: flex;
justify-content: space-between;


`