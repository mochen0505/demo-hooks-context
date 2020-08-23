import React, { useReducer, createContext } from "react";
import { reducer, defaultState } from './reducers';

export const Context = createContext(null);

const GlobalState = props => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    );
}

export default GlobalState;