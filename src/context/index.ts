import { createContext } from "react";
import {commonUtilsActionObj, commonUtilsType } from "./types";

import { configureStore } from "../store";

const commonUtilsInitial: commonUtilsType = {
  isMenuOpened: false,
};

const storeConfiguration = configureStore<typeof commonUtilsReducer,typeof commonUtilsInitial>({
  reducer: commonUtilsReducer,
  layerName: "common",
  initialState: commonUtilsInitial,
});
const store = storeConfiguration.getStore();
const dispatch = storeConfiguration.dispatch;
const subscribeToStore = storeConfiguration.subscribeToStore;

const storeInitial = {
  store: store,
  dispatch: dispatch,
  subscribeToStore: subscribeToStore,
};

///const Common = createContext(commonUtilsInitial);

const GlobalStore = createContext(storeInitial);

function commonUtilsReducer(
  state: commonUtilsType,
  action: commonUtilsActionObj
) {
  switch (action.type) {
    case "menuOpened": {
      const updatedState = { ...state };
      updatedState.isMenuOpened = true;
      return updatedState;
    }

    case "menuClosed": {
      const updatedState = { ...state };
      updatedState.isMenuOpened = false;
      return updatedState;
    }

    default:
      return state;
  }
}

function createReducerWithTypes<TypeState, TypeAction>(reducer: any) {
  return function (initialState: TypeState, action: TypeAction) {
    reducer(initialState, action);
  };
}

const reducer = createReducerWithTypes<commonUtilsType, commonUtilsActionObj>(
  commonUtilsReducer
);
const openMenu = function (dispatch: (action: commonUtilsActionObj) => void) {
  dispatch({ type: "menuOpened" });
};

const closeMenu = function (dispatch: (action: commonUtilsActionObj) => void) {
  dispatch({ type: "menuClosed" });
};

//selectors

const selectMenuStatus = (state: commonUtilsType) => state.isMenuOpened;

export {
  openMenu,
  closeMenu,
  storeInitial,
  commonUtilsInitial,
  commonUtilsReducer,
  selectMenuStatus,
  GlobalStore,
};
