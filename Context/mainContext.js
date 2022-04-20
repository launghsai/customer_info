import React, { createContext, useState, useEffect } from 'react'
export const MainContext = createContext()
import {CustomerData} from '../MockData/MockData'

export const MainProvider = ({ children }) => {

    const [customerData, setCustomerData] = useState([])

    useEffect(()=>{
        setCustomerData(CustomerData)
    },[])

    return (
        <MainContext.Provider
            value={{
                customerData,
                setCustomerData
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

