import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
   height: 100vh;
   color: #fff; 
   font-family: "Roboto", sans-serif, Arial, Helvetica, sans-serif;

}
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    font-size: 1rem;
    color: #000;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    strong,
    input,
    button,
    p {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif, Arial, Helvetica, sans-serif;
        color: #000;
    }
`;
