import styled from 'styled-components';

export const Container = styled.div`
    z-index: 99;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        width: 90%;
        align-items: center;
    }

    input {
        font-family: 'roboto';
        height: 40px;
        width: 90%;
        padding: 0 25px;
        border-radius: 25px 0 0 25px;
        border: 0.5px rgba(0, 0, 0, 0.2) solid;
        border-left: 0;
        background: transparent;
        box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.75);

        color: #000;

        outline: 0;

        ::placeholder {
            color: rgba(0, 0, 0, 0.5);
            font-weight: 500;
            font-size: 0.8rem;
        }
    }

    button {
        border-radius: 0px 25px 25px 0px;
        border: 0;
        background: rgba(0, 0, 0, 0.2);
        height: 40px;
        width: 10%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            height: 20px;
            width: 20px;
            color: rgba(0, 0, 0, 0.5);
        }
    }
`;

export const ChangeLocal = styled.div`
    display: flex;
    align-items: center;

    button {
        cursor: pointer;
        z-index: 100;
        border: none;
        background: transparent;


        svg {
            width: 30px;
            height: 30px;
            color: #86051a;
            background: transparent;
        }
    }

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;
