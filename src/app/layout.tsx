import React from "react";
import type {Metadata} from "next";
import cn from "classnames";
import localFont from 'next/font/local'
import type { Viewport } from 'next'
// import DeviceDetector from "device-detector-js";
// import {headers} from "next/headers";

import {Header} from "@/app/components/layout/header/header";
import {Footer} from "@/app/components/layout/footer/footer";
import {ProviderScreenSize} from "@/app/components/screenSize/provider";
import {ScreenSizeType} from "@/app/components/screenSize/context";
import {Cookie} from "@/app/components/cookie/cookie";

import "./globals.css";
import st from "./layout.module.scss";


const font = localFont({
  src: [
    {
      path: './style/font/TT_Firs_Neue_Regular.woff2',
      weight: '400',
      style: "normal",
    },
    {
      path: './style/font/TT_Firs_Neue_Medium.woff2',
      weight: '500',
      style: "normal",
    },
  ],
  variable: '--font-tt'
})

export const metadata: Metadata = {
  title: "DASCOURSE",
  description: "Generated by create next app", // TODO
};

const getDeviceType = (): ScreenSizeType => {
  return 's'
  // const deviceDetector = new DeviceDetector();
  // const headersList = headers()
  // const userAgent = headersList.get('user-agent')
  // const device = deviceDetector.parse(userAgent || '');
  // const type = device.device?.type;
  //
  // return type === 'desktop' ? 'l' : type === 'tablet' ? 'm' : 's'
}

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.variable, st.body)}>
        <ProviderScreenSize initial={getDeviceType()}>
          <Header/>
          {children}
          <Footer />
          <Cookie />
        </ProviderScreenSize>
      </body>
    </html>
  );
}