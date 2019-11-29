import React, { useEffect } from 'react';
import { geoLocalization } from './services/api';
import GlobalStyle, { Container } from './Global/styles';

import MainContainer from './components/Main';

// import "./App.css";

function App() {
    // useEffect(() => {
    //     async function getGeoLocalization() {
    //         navigator.geolocation.getCurrentPosition(async positon => {

    //             const { latitude, longitude } = positon.coords
    //             const y = await geoLocalization(latitude, longitude)
    //             console.log(y);
    //         })
    //     }
    //     getGeoLocalization()
    // }, [])
    return (
        <Container>
            <GlobalStyle />
            <MainContainer />
        </Container>
    );
}

export default App;
