import styled from 'styled-components';

export const Container = styled.div`
    background: transparent;
    height: 370px;
    width: 300px;
    line-height: 40px;

    display: flex;
    flex-direction: column;
    padding-left: 50px;

    svg {
        height: 60px;
        width: 60px;
        color: #ffff;
        background: transparent;
    }
`;

export const Country = styled.div`
    color: #ffff;

    h5 {
        color: #ffff;
        font-size: 2rem;
        font-weight: bold;
    }

    small {
        font-size: 0.9rem;
    }
`;

export const Temperature = styled.div`
    display: flex;
    align-items: center;

    strong {
        color: #ffff;
        font-weight: bold;
        font-size: 1.8rem;
        font-size: 2.5rem;
    }
 `;
