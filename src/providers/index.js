import React, { useState, createContext } from 'react';

export const ApiContex = createContext();

export function ApiProviders({ children }) {
    const [numero, setNumero] = useState({ num: 1 });

    return (
        <ApiContex.Provider value={numero}>
            {children}
        </ApiContex.Provider>
    );
}
