import React from 'react';

import { ApiProviders } from '../../providers';

import { MainContainer, AsideContainer, SearchContainer } from './styles';

import AsideDetails from '../AsideDetails';
import AsideUserLocation from '../AsideUserLocation';

import WeatherWeek from '../WeatherWeek';

import Search from '../Search';

export default function Main() {
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
