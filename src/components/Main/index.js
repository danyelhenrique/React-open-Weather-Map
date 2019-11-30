import React, { useEffect, useContext } from 'react';

import { ApiContex } from '../../providers';
import { geoLocalization, defaultLocalization } from '../../services/api';

import { MainContainer, AsideContainer, SearchContainer } from './styles';

import AsideDetails from '../AsideDetails';
import AsideUserLocation from '../AsideUserLocation';

import WeatherWeek from '../WeatherWeek';

import Search from '../Search';

export default function Main() {
    const [, setState] = useContext(ApiContex);

    async function err() {
        const { data } = await defaultLocalization();
        setState(data);
    };

    async function success(positon) {
        const { latitude, longitude } = positon.coords;
        const { data } = await geoLocalization(latitude, longitude);
        setState(data);
    }

    useEffect(() => {
        function getGeoLocalization() {
            navigator.geolocation.getCurrentPosition(success, err);
        }
        getGeoLocalization();
    }, []);


    return (
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
    );
}
