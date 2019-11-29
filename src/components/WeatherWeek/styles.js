import styled from 'styled-components';

import { devicesMax } from '../../Global/breakPoints';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    /* overflow: hidden; */
    flex: 1;

    @media ${devicesMax.laptop} {
    }
`;
