"use client"
import React from 'react';
// import {headers} from "next/headers";

export type ScreenSizeType = 's' | 'm' | 'l' | 'xl';

export type ContextType = {
    screenSize: ScreenSizeType;
    screenWidth: number;
};

export const initialState: ContextType = {
    screenSize: 's',
    screenWidth: 0
};

export const ContextForScreenSize = React.createContext(initialState);
