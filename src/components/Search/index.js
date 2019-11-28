import React, { useState } from 'react';

import { MdSearch, MdLocationOn } from 'react-icons/md';

import { Container, ChangeLocal } from './styles';


export default function Search() {
    const [s, set] = useState();

    const x = e => {
        set(e);
    };
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
                    onChange={e => x(e)}
                    placeholder="Search City"
                />
                <button type="button"><MdSearch /></button>
            </div>
        </Container>
    );
}
