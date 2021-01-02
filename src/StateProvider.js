import React, { createContext, useReducer, useContext } from "react";
// This is Data layer used to track basket and user
export const StateContext = createContext();
// create the state Provider and wrap the app in the layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// for pulling info form data layer
export const useStateValue = () => useContext(StateContext);