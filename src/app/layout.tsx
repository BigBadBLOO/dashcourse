import React from "react";
import type {Metadata} from "next";
import cn from "classnames";
import localFont from 'next/font/local';
import Head from "next/head";
// import DeviceDetector from "device-detector-js";
// import {headers} from "next/headers";

import {Header} from "@/app/components/layout/header/header";
import {Footer} from "@/app/components/layout/footer/footer";
import {ProviderScreenSize} from "@/app/components/screenSize/provider";
import {ScreenSizeType} from "@/app/components/screenSize/context";
import {Cookie} from "@/app/components/cookie/cookie";
import {PreloadImages} from "@/app/components/layout/preloadImage/preloadImages";
import {YandexMetric} from "@/app/components/layout/yandexMetrik/yandexMetric";

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
  applicationName: 'DASCOURSE',
  keywords: 'индивидуальная инвестиционная стратегия, куда инвестировать, инвестирование строительства объекта недвижимости, инвестирование строительства жилого дома, инвестирование в строительство домов, инвестирование в строительство, проанализ объектов недвижимости',
  description: "Поможем разработать индивидуальную инвестиционную стратегию, найдем и проанализируем объекты недвижимости, поможем в управлении инвестициями.",
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
    <Head>
      <PreloadImages/>
    </Head>
    <body className={cn(font.variable, st.body)}>
    <YandexMetric/>
    <ProviderScreenSize initial={getDeviceType()}>
      <Header/>
      {children}
      <Footer/>
      <Cookie/>
    </ProviderScreenSize>
    </body>
    </html>
  );
}
