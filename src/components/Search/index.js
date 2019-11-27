import React, { useState } from 'react';

import { Container } from './styles';

import { MdSearch } from "react-icons/md";

export default function Search() {
    const [s, set] = useState();

    const x = e => {
        set(e);
    };
    return (
        <Container>
            <input
                type="text"
                id="input"
                onChange={e => x(e)}
                placeholder="Search City"
            />
            <button type="button"><MdSearch /></button>
        </Container>
    );
}
