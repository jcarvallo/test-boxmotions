import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const initialState = {
  location: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setLocation":
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};
export const useStateValue = () => useContext(StateContext);
