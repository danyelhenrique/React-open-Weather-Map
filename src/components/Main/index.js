import React, { useEffect, useState } from 'react';
import { geoLocalization } from '../../services/api'

import { MainContainer, AsideContainer } from './styles';

import AsideDetails from '../AsideDetails'
import AsideUserLocation from '../AsideUserLocation'


import WeatherWeek from '../WeatherWeek'


export default function Main() {
    const [data, setData] = useState()

    useEffect(() => {
        // function x() {
        //     navigator.geolocation.getCurrentPosition(async positon => {
        //         const latitude = positon.coords.latitude
        //         const longitude = positon.coords.longitude
        //         const y = await geoLocalization(latitude, longitude)
        //         console.log(y);

        //     })
        // }
        // x()
    }, [])
    return (
        <MainContainer >
            <AsideContainer>
                <AsideUserLocation />
                <AsideDetails />
            </AsideContainer>
            <WeatherWeek />
        </MainContainer>
    );
}
