import React, { useEffect, useContext } from 'react';

import { ApiContex } from '../../providers';
import { geoLocalization } from '../../services/api';

import { MainContainer, AsideContainer, SearchContainer } from './styles';

import AsideDetails from '../AsideDetails';
import AsideUserLocation from '../AsideUserLocation';

import WeatherWeek from '../WeatherWeek';

import Search from '../Search';

export default function Main() {
    const [, setState] = useContext(ApiContex);

    useEffect(() => {
        async function getGeoLocalization() {
            navigator.geolocation.getCurrentPosition(async positon => {
                const { latitude, longitude } = positon.coords;
                const { data } = await geoLocalization(latitude, longitude);
                setState(data);
            });
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
