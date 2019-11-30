import styled, { keyframes } from 'styled-components';

import { devicesMax } from '../../Global/breakPoints';

const rotate = keyframes`
     from {
        transform: rotate(0deg);
     }
     to {
        transform: rotate(360deg);
}`;

export const LoadingContainer = styled.div`
    height: 370px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${rotate} 2s linear infinite;
        height: 36px;
        width: 36px;
        color: #fff;
        opacity: 0.3;
    }

    @media ${devicesMax.laptop} {
        height: 250px;
    }
`;
