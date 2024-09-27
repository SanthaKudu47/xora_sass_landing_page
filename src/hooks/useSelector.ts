import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { GlobalStore } from "../context";

export default function useSelector(selectorFn: any, layerName: string) {
  const { store, subscribeToStore } = useContext(GlobalStore);
  const subscribeCallBack = useRef(function () {
    forceRender((val) => val + 1);
  });
  const [, forceRender] = useState(0);
  const updated = store;
  const targetLayer = store[layerName];
  const selectedValue = selectorFn(targetLayer);

  useLayoutEffect(() => {
    const unsubscribe = subscribeToStore(subscribeCallBack.current);
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return selectedValue;
}
