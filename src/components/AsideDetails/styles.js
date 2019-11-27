import styled from 'styled-components';


export const Container = styled.div`
background: transparent;
height: 370px;
display: flex;
flex-direction:column;
width: 300px;
text-overflow: ellipsis;
align-items: center;
justify-content: center;

`;

export const Wrap = styled.div`
display: flex;
align-items: center;
padding-left: 50px;
width: 100%;
height: 100%;



    div {

        display: flex;
        flex-direction:column;
        justify-content: center;
        color: #fff;
        font-weight: 500;
        text-align: left;
        

        small{
            font-weight: 400;
        }

        span{
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