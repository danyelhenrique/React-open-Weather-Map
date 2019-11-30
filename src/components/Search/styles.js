import styled, { keyframes, css } from 'styled-components';
import { devicesMax } from '../../Global/breakPoints';

export const Container = styled.div`
    z-index: 99;
    width: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${devicesMax.laptop} {
        width: 100%;
    }
`;

const rotate = keyframes`
     from {
        transform: rotate(0deg);
     }
     to {
        transform: rotate(360deg);
}`;

export const InputSearch = styled.div`
    display: flex;
    width: 90%;
    align-items: center;

    @media ${devicesMax.laptop} {
        width: 100%;
    }
`;

export const Input = styled.input.attrs(props => ({
    type: 'text',
    autoComplete: 'off',
    autoCorrect: true,
    placeholder: 'Search City',
    disabled: props.loading,
}))`
    font-family: 'Roboto';
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
        font-family: Arial, Helvetica, sans-serif;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
        font-size: 0.8rem;
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const Button = styled.button.attrs(props => ({
    disabled: props.loading,
}))`
    border-radius: 0px 25px 25px 0px;
    border: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 40px;
    width: 10%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    @media ${devicesMax.laptop} {
        width: 20%;
    }

    svg {
        height: 20px;
        width: 20px;
        color: rgba(0, 0, 0, 0.5);
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
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
            color: #af4339;
            background: transparent;
        }
    }

    p {
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const FailToGetData = styled.div`
    display: flex;
    font-weight: 400;
    font-size: 0.8rem;

    p {
        color: #56050a;
    }
`;
