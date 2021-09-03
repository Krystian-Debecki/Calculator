import React, { useReducer, createContext, useContext } from "react";

import reducer, { init } from "../reducer/reducer";

export const context = createContext();

const AppContext = ({ children }) => {
    const [state, setState] = useReducer(reducer, init)

    return ( <
        context.Provider value = {
            [state, setState]
        } > { children } <
        /context.Provider>
    )
}

export const useEquation = () => useContext(context)
export default AppContext