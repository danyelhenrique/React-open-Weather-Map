import React from 'react';

import PropType from 'prop-types';

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

WeatherDaily.propTypes = {
    max: PropType.number.isRequired,
    min: PropType.number.isRequired,
    tempDay: PropType.number.isRequired,
    day: PropType.number.isRequired,
};
