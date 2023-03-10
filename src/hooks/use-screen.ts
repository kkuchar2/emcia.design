import { useEffect, useState } from 'react';

export const useScreenWidth = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(document.body.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        setWidth(document.body.clientWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
};

export const useScreenHeight = () => {

    const [height, setHeight] = useState(0);

    useEffect(() => {
        function handleResize() {
            setHeight(document.body.clientHeight);
        }

        window.addEventListener('resize', handleResize);

        setHeight(document.body.clientHeight);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return height;
};

export const useCallbackOnResize = (callback: () => void) => {
    useEffect(() => {
        function handleResize() {
            callback();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [callback]);
};