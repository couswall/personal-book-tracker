import { RefObject, useEffect } from "react";

export const useClickOutside = (refs: RefObject<HTMLDivElement>[], callbackFn: () => void) => {
   const handleClickOutside = (e: MouseEvent) => {
        const isOutside = refs.every(
            (ref) => ref.current && !ref.current.contains(e.target as Node)
        );
        if (isOutside) callbackFn();
      };
      
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, []);
}
