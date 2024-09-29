import { useCallback, useEffect, useState } from "react";

export default function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollListenerHandler = useCallback(function (_event: Event) {
    
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListenerHandler);
    return () => {
      window.addEventListener("scroll", scrollListenerHandler);
    };
  }, []);

  return isScrolled;
}
