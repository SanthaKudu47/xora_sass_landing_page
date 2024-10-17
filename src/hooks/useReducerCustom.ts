import { useState } from "react";
import {
  commonUtilsActionObj,
  commonUtilsReducerType,
  commonUtilsType,
} from "../context/types";

export default function useReduceCustom(
  commonUtilsState: commonUtilsType,
  reducer: commonUtilsReducerType
): [commonUtilsType, (action: commonUtilsActionObj) => void] {
  const [state, setState] = useState(commonUtilsState);
  const commonUtils = state; //initial be global

  const dispatch = function (action: commonUtilsActionObj) {
    const updatedState = reducer(state, action);
    setState(updatedState);
  };

  return [commonUtils, dispatch];
}
