import React from 'react';

import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';

import { Animated } from 'react-animated-css';


import { MdBeachAccess } from 'react-icons/md';
import { Container, Wrap } from './styles';

export default function Aside({ delay }) {
    return (
        <Animated
            animationIn="slideInRight"
            animationOut="bounce"
            animationInDelay={delay}
        >

            <Container>
                <Wrap>
                    <WiHumidity />
                    <div>
                        <small>Humidity</small>
                        <span> 50%</span>
                    </div>
                </Wrap>
                <Wrap>
                    <WiThermometer />
                    <div>
                        <small>Air Pressure</small>
                        <span> 100.9 PS</span>
                    </div>
                </Wrap>
                <Wrap>
                    <WiStrongWind />
                    <div>
                        <small>Wind Spped</small>
                        <span> 1.4 Km/h</span>
                    </div>
                </Wrap>
                <Wrap>
                    <MdBeachAccess />
                    <div>
                        <p> heavy intensity rain</p>
                    </div>
                </Wrap>
            </Container>
        </Animated>

    );
}
