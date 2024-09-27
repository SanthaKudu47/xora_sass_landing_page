import { useContext } from "react";
import { GlobalStore } from "../context";
import { commonActionType } from "../context/types";

export default function useDispatch() {
  const { store, dispatch } = useContext(GlobalStore);

  return function (layerName: string, action: commonActionType) {
    dispatch(layerName, action);
  };
}
