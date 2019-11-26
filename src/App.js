import React, { useEffect, useState } from "react";
import api from './services/api'
import GlobalStyle, { Container } from './Global/styles'


import MainContainer from './components/Main'

// import "./App.css";


function App() {
    return (
        <Container>
            <GlobalStyle />
            < MainContainer />
        </Container>)
}

export default App;
