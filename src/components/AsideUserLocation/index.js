import React from 'react';

import { WiCloudyWindy, WiCelsius } from 'react-icons/wi';

import { MdLocationOn } from 'react-icons/md';

import { Container, Country, Temperature, ChangeLocal } from './styles';

export default function AsideUserLocation() {
    return (
        <Container>
            <WiCloudyWindy />
            <Country>
                <h5>Brasil</h5>
                <small>Rio de Janeiro</small>
            </Country>

            <Temperature>
                <strong>28</strong>
                <WiCelsius />
            </Temperature>

            <ChangeLocal>
                <button type="button" onClick={_ => console.log('Oi')}>
                    <MdLocationOn />
                </button>
                <p>Change Location</p>
            </ChangeLocal>
        </Container>
    );
}
