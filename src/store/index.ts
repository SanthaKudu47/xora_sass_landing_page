import { commonActionType,  storeOptions } from "../context/types";

type listenerCallback = () => void;
type store = {
  [index: string]: any;
};

type reducers = {
  [index: string]: any;
};

class Store {
  store: store;
  reducers: reducers;
  listenerCallbacks: listenerCallback[];
  unsubscribeListener: (index: number) => void;
  dispatch: (layerName: string, action: commonActionType) => void;
  subscribeToStore: (
    listenerCallback: listenerCallback
  ) => (() => void) | undefined;

  constructor() {
    this.store = {};
    this.listenerCallbacks = [];
    this.unsubscribeListener = this.unsubscribe.bind(this);
    this.dispatch = this.dispatcher.bind(this);
    this.subscribeToStore = this.subscribe.bind(this);
    this.reducers = {};
  }

  subscribe(listenerCallback: listenerCallback) {
    //check fro existence
    if (this.listenerCallbacks.includes(listenerCallback)) return;

    this.listenerCallbacks.push(listenerCallback);
    const indexOfCallBack = this.listenerCallbacks.indexOf(listenerCallback);
    const unsubscribe = () => {
      this.unsubscribeListener(indexOfCallBack);
    };

    return unsubscribe;
  }

  getStore() {
    //get store type

    return this.store;
  }
  // getSelectedState(stateName = "base") {
  //   return this.store[stateName];
  // }

  unsubscribe(indexOfCallBack: number) {
    const updatedListAfterIndex = this.listenerCallbacks.slice(
      indexOfCallBack + 1
    );
    const updatedListBeforeIndex = this.listenerCallbacks.slice(
      0,
      indexOfCallBack - 1
    );

    const newList = [...updatedListBeforeIndex, ...updatedListAfterIndex];
    this.listenerCallbacks = newList;
  }

  addLayer<InitialState>(state: InitialState, layerName: string) {
    this.store[layerName] = state;
  }

  notify() {
    this.listenerCallbacks.forEach((listenerCallback) => {
      listenerCallback();
    });
  }

  setReducer<ReducerT, InitialStateType>(
    reducer: ReducerT,
    targetLayer: string,
    initialState: InitialStateType
  ) {
    this.reducers[targetLayer] = reducer;
    this.addLayer<InitialStateType>(initialState, targetLayer);
  }

  dispatcher<ActionType>(layerName: string, action: ActionType) {
    const reducer = this.reducers[layerName];
    const currentState = this.store[layerName];
    const updatedState = reducer(currentState, action);
    this.store[layerName] = updatedState;
    this.notify();
  }
}

function configureStore<ReducerT, InitialStateT>(
  options: storeOptions<ReducerT, InitialStateT>
) {
  const stConfig = new Store();
  stConfig.setReducer<ReducerT, InitialStateT>(
    options.reducer,
    options.layerName,
    options.initialState
  );
 // type StoreType = ReturnType<typeof stConfig.getStore>;
  return stConfig;
}

export { configureStore };
export type { store };
