import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const initialState = {
  buttonNav: { text: "Informe", path: "/reports" },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setButtonNav":
      return {
        ...state,
        buttonNav: action.buttonNav,
      };
    default:
      return state;
  }
};
export const useStateValue = () => useContext(StateContext);
