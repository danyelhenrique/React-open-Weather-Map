import React from 'react';
import { Animated } from "react-animated-css";

import { Container } from './styles';

import WeatherDaily from '../WeatherDaily';


export default function index({ date, max, min }) {
    const getDate = new Date(date * 1000);


    const gsDayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return (
        <Animated animationIn="bounceInLeft" animationOut="fadeOut">
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
