import React, { useState, createContext } from 'react';

// Create the counter context
export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
}
