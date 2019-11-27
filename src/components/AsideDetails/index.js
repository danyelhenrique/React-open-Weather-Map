import React from 'react';

import { Container, Wrap } from './styles';

import { WiHumidity } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

import { MdBeachAccess } from "react-icons/md";


export default function Aside() {
    return (
        <Container >
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
                    <p> heavy intensity rain
                    </p>
                </div>
            </Wrap>
        </Container >
    )
}

