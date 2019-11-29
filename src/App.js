import React, { useEffect, useContext } from 'react';
import { geoLocalization } from './services/api';
import GlobalStyle, { Container } from './Global/styles';

import MainContainer from './components/Main';
import { ApiProviders } from './providers';

function App() {
    return (
        <ApiProviders>
            <Container>
                <GlobalStyle />
                <MainContainer />
            </Container>
        </ApiProviders>
    );
}

export default App;
