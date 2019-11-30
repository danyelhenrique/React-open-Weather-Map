import React, { useContext } from 'react';

import { Animated } from 'react-animated-css';

import PropType from 'prop-types';

import { WiCloudyWindy } from 'react-icons/wi';

import { ApiContex } from '../../providers';

import { Container, Country, Temperature } from './styles';

import Loading from '../Loading';


export default function AsideUserLocation({ delay }) {
    const [state] = useContext(ApiContex);

    function render() {
        if (!state) {
            return (
                <Loading />
            );
        }
        const degre = state.list[0].temp.day;
        return (
            <Animated
                animationIn="slideInLeft"
                animationOut="bounce"
                animationInDelay={delay}
            >
                <Container>
                    <WiCloudyWindy />
                    <Country>
                        <h5>{state.city.country}</h5>
                        <small>{state.city.name}</small>
                    </Country>

                    <Temperature>
                        <strong>{degre}°C</strong>
                    </Temperature>
                </Container>
            </Animated>
        );
    }

    return <>{render()}</>;
}

AsideUserLocation.propTypes = {
    delay: PropType.number.isRequired,
};
