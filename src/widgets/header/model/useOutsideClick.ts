import React, { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
    const ref = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback]);

    return ref;
};

export default useOutsideClick;