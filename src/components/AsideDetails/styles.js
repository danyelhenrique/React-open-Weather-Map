import styled from 'styled-components';

import { devicesMax, devicesMin } from '../../Global/breakPoints';

export const Container = styled.div`
    background: transparent;
    height: 370px;
    display: flex;
    flex-direction: column;
    width: 300px;
    text-overflow: ellipsis;
    align-items: center;
    justify-content: center;

    @media ${devicesMax.laptop} {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        height: 250px;
        justify-content: space-evenly;
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 50px;
    width: 100%;
    height: 100%;

    @media ${devicesMax.laptop} {
        display: flex;
        padding-left: 30px;
        height: auto;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        font-weight: 500;
        text-align: left;

        small {
            font-weight: 400;
        }

        span {
            font-weight: bold;
            font-size: 1.8rem;
            color: #fff;
        }

        p {
            font-weight: 400;
            font-size: 1rem;
            color: #fff;

            white-space: nowrap;
            overflow: hidden;

            width: 180px;
            text-overflow: ellipsis;
        }
    }

    svg {
        height: 50px;
        width: 50px;
        color: #ffff;
        background: transparent;
        align-self: center;
    }
`;
