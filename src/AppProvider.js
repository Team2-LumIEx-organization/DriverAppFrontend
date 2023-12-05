import React, { useReducer } from "react";
import MainContext from "./MainContext";

import loginReducer, { key as loginKey } from "./pages/login/container/reducer";

import toasterReducer, { key as toasterKey } from "./components/base/toaster/container/reducer";

import LoginPerformances from "./pages/login/container/performances";
import ToasterPerformances from "./components/base/toaster/container/performances";
import combineReducer from "./utils/combineReducer";

const AppProvider = props => {
  const initialValue = {
    [loginKey]: {
      token: ''
    },
    
    [toasterKey]: {
      toasterMessages: []
    },
  };

  const rootReducer = combineReducer({
    [loginKey]: loginReducer,
   
    [toasterKey]: toasterReducer,
  });
  const [state, dispatch] = useReducer(rootReducer, initialValue);

  const myInitialState = {
    ...state,
    [loginKey]: {
      ...state[loginKey],
      ...LoginPerformances(dispatch),
    },
    
    [toasterKey]: {
      ...state[toasterKey],
      ...ToasterPerformances(dispatch)
    }
  };

  return (
    <MainContext.Provider displayName="Main Context" value={myInitialState}>
      {props.children}
    </MainContext.Provider>
  );
};

export default AppProvider;
