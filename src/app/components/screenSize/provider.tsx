"use client";
import React, {useEffect, useState} from 'react';

import {ContextForScreenSize, ScreenSizeType} from './context';

export type PropsType = {
    children: React.ReactNode;
    initial: ScreenSizeType;
};

export const ProviderScreenSize: React.FC<PropsType> = ({children, initial}) => {
    const [screenSize, setScreenSize] = useState<ScreenSizeType>(initial);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const page = document.documentElement;
        const bodyMinWidthStr = getComputedStyle(document.body).minWidth;
        const bodyMinWidthNumber = Number(bodyMinWidthStr.replace(/[^0-9]/g, ""));

        const scalePage = (clientWidth: number) => {
            const innerWidth = window.innerWidth;
            if(innerWidth < clientWidth) {
                const resizeCoef = innerWidth / clientWidth;
                const resizeCoefPercents = 100 * resizeCoef;
                page.style.transformOrigin = `top left`;
                page.style.transform = `scale(${resizeCoef})`;
                page.style.width = `${resizeCoefPercents}%`;
                page.style.height = `${resizeCoefPercents}%`;
            } else {
                page.style.transform = ``;
                page.style.transformOrigin = ``;
                page.style.width = ``;
                page.style.height = ``;
            }
        }

        const handleResize = () => {
            const innerWidth = window.innerWidth;
            const width = innerWidth > bodyMinWidthNumber ? innerWidth : bodyMinWidthNumber;
            const size = width <= 430 ? 's' : width > 430 && width <= 830 ? 'm' : width > 830 && width <= 1440 ? 'l' : 'xl'

            setScreenSize(size);
            setScreenWidth(width);
            // setNewMeta(width)
            scalePage(width);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ContextForScreenSize.Provider
            value={{screenSize, screenWidth}}
        >
            {children}
        </ContextForScreenSize.Provider>
    );
};
