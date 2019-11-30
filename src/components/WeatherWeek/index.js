import React, { useContext, useCallback } from 'react';
import PropType from 'prop-types';

import { Animated } from 'react-animated-css';

import Loading from '../Loading';

import { ApiContex } from '../../providers';

import { Container } from './styles';

import WeatherDaily from '../WeatherDaily';

export default function WeatherWeek({ delay }) {
    const [state] = useContext(ApiContex);

    function formatTemp(date) {
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

    const RenderWeather = useCallback(() => {
        if (!state) {
            return <Loading />;
        }
        return state.list.map(date => {
            const {
                formatedTempMax,
                formatedTempMin,
                formatedTempDay,
            } = formatTemp(date);
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
    }, [state]);

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
