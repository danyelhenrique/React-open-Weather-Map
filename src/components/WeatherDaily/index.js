import React from 'react';

import { Container, MinMax } from './styles';
import { WiCelsius } from "react-icons/wi";


// svg {
//     height: 50px;
//     width: 50px;
//     color :	#ffff;

//     background: transparent;
//     stroke-width: 0.8
// }

export default function WeatherDaily() {
    return (
        <Container>
            <h4>Wed Nov 27</h4>
            <div>
                <strong>
                    <span>
                        28°C
                    </span>
                </strong>
                <MinMax>
                    <span>
                        Min
                        <p>
                            28
                        </p>
                    </span>
                    <span>
                        <p>
                            Max
                        </p>
                        28
                    </span>
                </MinMax>
            </div>
        </Container>
    );
}

