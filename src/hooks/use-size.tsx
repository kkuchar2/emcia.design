import React, { useEffect, useState } from 'react';

export interface ISize {
    width?: number;
    height?: number;
}

export const useParentSize = (childRef: React.RefObject<HTMLElement>): ISize => {
    const [parentSize, setParentSize] = useState<ISize>({ width: 0, height: 0 });

    useEffect(() => {
        const childElement = childRef.current;
        const parentElement = childElement?.parentElement;

        if (!childElement || !parentElement) {
            return;
        }

        const updateParentSize = () => {
            const { width, height } = parentElement.getBoundingClientRect();
            setParentSize({ width, height });
        };

        updateParentSize();
        window.addEventListener('resize', updateParentSize);

        return () => {
            window.removeEventListener('resize', updateParentSize);
        };
    }, [childRef]);

    return parentSize;
};
export const useCurrentSize = (ref: React.RefObject<HTMLElement>): ISize => {
    const [currentSize, setCurrentSize] = useState<ISize>({ width: 0, height: 0 });

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const updateCurrentSize = () => {
            const { width, height } = element.getBoundingClientRect();
            setCurrentSize({ width, height });
        };

        updateCurrentSize();
        window.addEventListener('resize', updateCurrentSize);

        return () => {
            window.removeEventListener('resize', updateCurrentSize);
        };
    }, [ref]);

    return currentSize;
};
