import React, { useContext } from 'react';

import { MdSearch, MdLocationOn } from 'react-icons/md';

import { Container, ChangeLocal } from './styles';

import { ApiContex } from '../../providers';

export default function Search() {
    const a = useContext(ApiContex)

    console.log(a);
    return (
        <Container>
            <ChangeLocal>
                <button type="button">
                    <MdLocationOn />
                </button>
                <p>Change Location</p>
            </ChangeLocal>
            <div>
                <input
                    type="text"
                    id="input"
                    placeholder="Search City"
                />
                <button type="button"><MdSearch /></button>
            </div>
        </Container>
    );
}
