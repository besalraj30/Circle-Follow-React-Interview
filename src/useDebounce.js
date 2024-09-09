import { useCallback, useRef } from 'react';

export const useDebounce = (func, delay) => {
    const timerRef = useRef(null);

    return useCallback((...args) => {
        // Clear the previous timeout if it exists
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        // Set a new timeout to execute the function after the delay
        timerRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    }, [func, delay]);
};
