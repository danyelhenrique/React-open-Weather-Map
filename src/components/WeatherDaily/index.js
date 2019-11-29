import React from 'react';

import { Container, MinMax } from './styles';

export default function WeatherDaily({ max, min, tempDay, day }) {
    return (
        <Container>
            <h4>{day}</h4>
            <div>
                <strong>
                    <span>{tempDay}°C</span>
                </strong>
                <MinMax>
                    <span>
                        Min<p>{min}</p>
                    </span>
                    <span>
                        Max<p>{max}</p>
                    </span>
                </MinMax>
            </div>
        </Container>
    );
}
