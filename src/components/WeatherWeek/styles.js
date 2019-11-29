import styled from 'styled-components';

import { devicesMin } from '../../Global/breakPoints';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;

    @media ${devicesMin.laptop} {
    }
`;
