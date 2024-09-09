import { useCallback, useRef } from "react";

export const useThrottle = (func, delay) => {
    const lastFunc = useRef(null);
    const lastRan = useRef(0);

    return useCallback((...args) => {
        const now = Date.now();

        if (!lastRan.current || now - lastRan.current >= delay) {
            func(...args);
            lastRan.current = now;
        } else {
            if (lastFunc.current) clearTimeout(lastFunc.current);
            lastFunc.current = setTimeout(() => {
                func(...args);
                lastRan.current = now;
            }, delay - (now - lastRan.current));
        }
    }, [func, delay]);
};
