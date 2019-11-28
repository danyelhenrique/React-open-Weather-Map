import React, { useEffect, useState } from 'react';
import { geoLocalization } from '../../services/api';

import { ApiProviders } from '../../providers';

import { MainContainer, AsideContainer, SearchContainer } from './styles';

import AsideDetails from '../AsideDetails';
import AsideUserLocation from '../AsideUserLocation';

import WeatherWeek from '../WeatherWeek';

import Search from '../Search';

export default function Main() {
    const [data, setData] = useState();

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
    }, []);
    return (
        <ApiProviders>
            <MainContainer>
                <AsideContainer>
                    <AsideUserLocation delay={1000} />
                    <SearchContainer>
                        <Search />
                    </SearchContainer>
                    <AsideDetails delay={1200} />
                </AsideContainer>
                <WeatherWeek delay={1400} />
            </MainContainer>
        </ApiProviders>
    );
}
