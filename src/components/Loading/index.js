import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { LoadingContainer } from './styles';

export default function Loading() {
    return (
        <LoadingContainer>
            <FaSpinner />
        </LoadingContainer>
    );
}
