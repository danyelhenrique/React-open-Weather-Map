import styled from 'styled-components';


export const Container = styled.div`
background: transparent;
height: 370px;
width: 300px;

display: flex;
flex-direction: column;
padding-left: 50px;

    svg {
        height: 50px;
        width: 50px;
        color :	#ffff;
        background: transparent;
    }

   

`;


export const Country = styled.div`
        color :	#ffff;

    h5 {
        color :	#ffff;
        font-size: 1.8rem;
        font-weight: bold;
    }

    small {
        font-size: 0.8rem;
    }
`

export const Temperature = styled.div`
    display: flex;
    align-items: center;

    strong {
        color :	#ffff;
        font-weight: bold;
        font-size: 1.8rem;
    }

    svg {
        height: 50px;
        width: 50px;
        color :	#ffff;

        background: transparent;
        stroke-width: 0.8
    }
`
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
            color :	#86051a;
            background: transparent;

        } 
    }

    p {
            color: rgba(0,0,0,0.5);
        }
`;