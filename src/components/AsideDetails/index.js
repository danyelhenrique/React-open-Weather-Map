import React, { useContext, useCallback } from 'react';
import PropType from 'prop-types';

import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';

import { Animated } from 'react-animated-css';

import { MdBeachAccess } from 'react-icons/md';

import { ApiContex } from '../../providers';

import { Container, Wrap } from './styles';

import Loading from '../Loading';

export default function Aside({ delay }) {
    const [state] = useContext(ApiContex);

    const render = useCallback(() => {
        if (!state) {
            return <Loading />;
        }
        const { humidity, pressure, speed, weather } = state.list[0];

        const weatherDescription = weather[0].description;

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
                            <span> {humidity}%</span>
                        </div>
                    </Wrap>
                    <Wrap>
                        <WiThermometer />
                        <div>
                            <small>Air Pressure</small>
                            <span> {pressure} hPa</span>
                        </div>
                    </Wrap>
                    <Wrap>
                        <WiStrongWind />
                        <div>
                            <small>Wind Spped</small>
                            <span> {speed} MT/S</span>
                        </div>
                    </Wrap>
                    <Wrap>
                        <MdBeachAccess />
                        <div>
                            <p>{weatherDescription}</p>
                        </div>
                    </Wrap>
                </Container>
            </Animated>
        );
        // eslint-disable-next-line
    }, [state]);
    return <>{render()}</>;
}

Aside.propTypes = {
    delay: PropType.number.isRequired,
};
