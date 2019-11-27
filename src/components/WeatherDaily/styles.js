import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
    /* TROCAR HEIGHT */
    height: 90%; 
    width: 176px;
    background: transparent;
    color: #fff;

    border-radius: 5px;
    padding: 10px;

    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.75),
    1px 1px 1px 1px rgba(0,0,0,0.75)
    ;

    background: rgba(0,0,0,0.2);

    h4 {
        color: #fff;

    }

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        strong {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            color :#ffff;
            font-size: 3rem;

        span {
            color:#fff;

        }
    }
}

`;


export const MinMax = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

span {
    color :#fff;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #fff;
    }
}
`;