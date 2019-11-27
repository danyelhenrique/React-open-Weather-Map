import React from 'react';

import { WiCelsius } from 'react-icons/wi';
import { Container, MinMax } from './styles';

export default function WeatherDaily() {
    return (
        <Container>
            <h4>Wed Nov 27</h4>
            <div>
                <strong>
                    <span>28°C</span>
                </strong>
                <MinMax>
                    <span>
                        Min<p>28</p>
                    </span>
                    <span>
                        Max<p>28</p>
                    </span>
                </MinMax>
            </div>
        </Container>
    );
}
