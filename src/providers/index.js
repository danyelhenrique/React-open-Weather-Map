import React, { useState, createContext } from 'react';

import PropTypes from 'prop-types';

export const ApiContex = createContext();

export function ApiProviders({ children }) {
    const [state, setState] = useState();

    return (
        <ApiContex.Provider value={[state, setState]}>
            {children}
        </ApiContex.Provider>
    );
}

ApiProviders.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
