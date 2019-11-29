import React, { useContext, useState } from 'react';

import { MdSearch, MdLocationOn } from 'react-icons/md';
import { Search as SearchApi } from '../../services/api';

import { Container, ChangeLocal, InputSearch, FailToGetData } from './styles';

import { ApiContex } from '../../providers';

export default function Search() {
    const [city, setCity] = useState('');
    const [erro, setErro] = useState(false);
    const [, setState] = useContext(ApiContex);

    async function searchCity() {
        try {
            const getCity = await SearchApi(city);
            const data = await getCity;
            if (data.status === 200) {
                setState(data.data);
                setErro(false);
            }
        } catch (error) {
            setErro(true);
        } finally {
            setCity('');
        }
    }
    return (
        <Container>
            <ChangeLocal>
                <button type="button">
                    <MdLocationOn />
                </button>
                <p>Change Location</p>
            </ChangeLocal>
            <InputSearch>
                <input
                    type="text"
                    id="input"
                    value={city}
                    placeholder="Search City"
                    onChange={e => setCity(e.target.value)}
                />
                <button type="button" onClick={() => searchCity()}>
                    <MdSearch />
                </button>
            </InputSearch>
            {erro && (
                <FailToGetData>
                    <p>Please check if name of city is correct.</p>
                </FailToGetData>
            )}
        </Container>
    );
}
