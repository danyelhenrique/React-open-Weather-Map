import styled from 'styled-components';

import { devicesMax, devicesMin } from '../../Global/breakPoints';

import background from '../../assets/12.jpg';

export const MainContainer = styled.main`
    width: 100%;
    background: url(${background}) no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;

    @media ${devicesMin.laptop} {
        height: 100%;
        background-position: center;

        &::before {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #000;
        top: 0;
        opacity: 0.3;
    }
    }

    @media ${devicesMax.laptop} {
       flex-direction: row;
       background-position: top;
       background-size:100% 100%;
       background-position: center;
       object-fit: cover;
       flex-wrap: wrap;


    }




`;

export const AsideContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${devicesMax.laptop} {
      flex-wrap: wrap;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
