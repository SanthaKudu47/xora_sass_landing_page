type commonUtilsType = {
  isMenuOpened: boolean;
};

type actionTypes = "menuClosed" | "menuOpened";

type commonUtilsReducerType = (
  state: commonUtilsType,
  action: commonUtilsActionObj
) => commonUtilsType;

type commonUtilsActionObj = {
  type: actionTypes;
  value?: any;
};

type commonActionType = { type: string; value?: any };
type storeOptions<ReducerT,InitialStateType> = {
  reducer: ReducerT;
  layerName: string;
  initialState: InitialStateType;
};
type reducer = (
  state: {
    [index: string]: any;
  },
  action: commonActionType
) => object;



export type {
  commonUtilsReducerType,
  actionTypes,
  commonUtilsType,
  commonUtilsActionObj,
  commonActionType,
  reducer,
  storeOptions,
};
