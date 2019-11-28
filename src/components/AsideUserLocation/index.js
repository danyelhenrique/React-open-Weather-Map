import React from 'react';

import { WiCloudyWindy } from 'react-icons/wi';

import { Animated } from 'react-animated-css';

import { Container, Country, Temperature } from './styles';

export default function AsideUserLocation() {
    return (
        <Animated animationIn="slideInLeft" animationOut="bounce">
            <Container>
                <WiCloudyWindy />
                <Country>
                    <h5>Brasil</h5>
                    <small>Rio de Janeiro</small>
                </Country>

                <Temperature>
                    <strong>28°C</strong>
                </Temperature>

            </Container>
        </Animated>

    );
}
