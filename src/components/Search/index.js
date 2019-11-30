import React, { useContext, useState } from 'react';

import { MdSearch, MdLocationOn } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';
import { Search as SearchApi } from '../../services/api';

import { Container, ChangeLocal, InputSearch, Input, Button, FailToGetData } from './styles';

import { ApiContex } from '../../providers';

export default function Search() {
    const [city, setCity] = useState('');
    const [erro, setErro] = useState(false);
    const [loading, setLoading] = useState(false);
    const [, setState] = useContext(ApiContex);

    async function searchCity() {
        try {
            setLoading(true);
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
            setLoading(false);
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
            <InputSearch >
                <Input
                    id="input"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    loading={loading}
                />
                <Button type="button" onClick={() => searchCity()} loading={loading}>
                    {loading ? <FaSpinner /> : <MdSearch />}
                </Button>
            </InputSearch>
            {erro && (
                <FailToGetData>
                    <p>Please check if name of city is correct.</p>
                </FailToGetData>
            )}
        </Container>
    );
}
