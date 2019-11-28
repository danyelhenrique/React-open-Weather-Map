import React from 'react';
import PropType from 'prop-types';
import { Animated } from 'react-animated-css';

import { Container } from './styles';

import WeatherDaily from '../WeatherDaily';


export default function WeatherWeek({ delay }) {
    // const getDate = new Date(date * 1000);



    // const gsDayNames = [
    //     'Sunday',
    //     'Monday',
    //     'Tuesday',
    //     'Wednesday',
    //     'Thursday',
    //     'Friday',
    //     'Saturday',
    // ];

    return (
        <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            animationInDelay={delay}
        >
            <Container>
                <WeatherDaily />
                <WeatherDaily />
                <WeatherDaily />
                <WeatherDaily />
                <WeatherDaily />
                <WeatherDaily />
                <WeatherDaily />
            </Container>
        </Animated>
    );
}


WeatherWeek.propTypes = {
    delay: PropType.number.isRequired,
};
