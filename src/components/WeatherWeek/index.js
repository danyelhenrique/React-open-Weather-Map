import React, { useContext } from 'react';
import PropType from 'prop-types';

import { Animated } from 'react-animated-css';

import { ApiContex } from '../../providers';

import { Container } from './styles';

import WeatherDaily from '../WeatherDaily';

export default function WeatherWeek({ delay }) {
    const [state] = useContext(ApiContex);

    function formatDate(date) {
        const { max, min, day } = date.temp;
        const formatedTempMax = Math.round(max);
        const formatedTempMin = Math.round(min);
        const formatedTempDay = Math.round(day);

        return { formatedTempMax, formatedTempMin, formatedTempDay };
    }

    function formateDate(dt) {
        const current = new Date(dt * 1000);
        const date = current
            .toString()
            .split(' ')
            .splice(0, 4)
            .join(' ');
        return date;
    }

    function RenderWeather() {
        if (!state) {
            return <h1>Loading</h1>;
        }
        return state.list.map(date => {
            const {
                formatedTempMax,
                formatedTempMin,
                formatedTempDay,
            } = formatDate(date);
            const day = formateDate(date.dt);
            return (
                <WeatherDaily
                    key={String(date.dt)}
                    max={formatedTempMax}
                    min={formatedTempMin}
                    tempDay={formatedTempDay}
                    day={day}
                />
            );
        });
    }

    return (
        <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            animationInDelay={delay}
        >
            <Container>{RenderWeather()}</Container>
        </Animated>
    );
}

WeatherWeek.propTypes = {
    delay: PropType.number.isRequired,
};
