import React from "react";

import { Container } from './styles'

import WeatherDaily from '../WeatherDaily'

export default function index({ date, max, min }) {
    const getDate = new Date(date * 1000);

    var gsDayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return (
        <Container>
            <WeatherDaily />
            <WeatherDaily />
            <WeatherDaily />
            <WeatherDaily />
            <WeatherDaily />
            <WeatherDaily />
            <WeatherDaily />
        </Container>
    );
}
