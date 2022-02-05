import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const crypto = createContext()

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("AUD");
    const [symbol, setSymbol] = useState('$');

    useEffect(() => {
        if (currency = "AUD") setSymbol('$');
        else if (currency = "USD") setSymbol('$');
    }, [currency]);

    return (
        <crypto.Provider value={{currency, symbol, setCurrency}}>
            {children}
        </crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(crypto);
};
