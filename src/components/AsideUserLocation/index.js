import React from 'react';

import PropType from 'prop-types';

import { WiCloudyWindy } from 'react-icons/wi';

import { Animated } from 'react-animated-css';

import { Container, Country, Temperature } from './styles';

export default function AsideUserLocation({ delay }) {
    return (
        <Animated
            animationIn="slideInLeft"
            animationOut="bounce"
            animationInDelay={delay}
        >
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

AsideUserLocation.propTypes = {
    delay: PropType.number.isRequired,
};
