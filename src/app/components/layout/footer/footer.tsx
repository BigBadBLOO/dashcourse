"use client"
import React, {useContext} from "react";
import Image from "next/image";

import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {Link} from "@/app/components/dsm/Link/link";
import {anchor} from "@/app/constants/anchor";

import st from './footer.module.scss';
import cn from "classnames";
import {Button} from "@/app/components/dsm/Button/button";


export const Footer = () => {
  const {screenSize} = useContext(ContextForScreenSize);

  if (screenSize === 's') {
    return <footer className={st.wrapSmall}>
      <Image
        src="/logoText.svg"
        width={248}
        height={30}
        alt="Logo dashcourse"
      />
      <div className={cn(st.block, st.blockFirst)}>
        <Link link={`#${anchor.about}`}>О компании</Link>
        <Link link={`#${anchor.advantages}`}>Преимущества</Link>
        <Link link={`#${anchor.objects}`}>Объекты</Link>
        <Link link={`#${anchor.reviews}`}>Отзывы</Link>
      </div>
      <div className={st.block}>
        <p className={st.text}>Адрес: 125040, город Москва, Ленинградский пр-кт, д. 34а, помещ. 1305</p>
        <p className={st.text}>ОГРН 1247700371313</p>
        <p className={st.text}>ИНН 9714049826</p>
        <a className={st.text} href={'./files/cookies_DAS_PDF.pdf'}>Cookies</a>
      </div>
      {/*TODO сделать переход*/}
      <Button className={st.button} onClick={() => {
      }}>Свяжитесь с нами</Button>
      <p className={st.rights}>© 2024. DASCOURSE</p>
    </footer>
  }

  if (screenSize === 'm') {
    return <footer className={st.wrapMedium}>
      <Image
        src="/logoText.svg"
        width={248}
        height={30}
        alt="Logo dashcourse"
      />
      <div className={st.blocksRow}>
        <div className={cn(st.block, st.blockFirst)}>
          <Link link={`#${anchor.about}`}>О компании</Link>
          <Link link={`#${anchor.advantages}`}>Преимущества</Link>
          <Link link={`#${anchor.objects}`}>Объекты</Link>
          <Link link={`#${anchor.reviews}`}>Отзывы</Link>
        </div>
        <div className={st.blocksColumn}>
          <div className={st.block}>
            <p className={st.text}>Адрес: 125040, город Москва, Ленинградский пр-кт, д. 34а, помещ. 1305</p>
            <p className={st.text}>ОГРН 1247700371313</p>
            <p className={st.text}>ИНН 9714049826</p>
            <a className={st.text} href={'./files/cookies_DAS_PDF.pdf'}>Cookies</a>
          </div>
          {/*TODO сделать переход*/}
          <Button className={st.button} onClick={() => {
          }}>Свяжитесь с нами</Button>
        </div>
      </div>

      <p className={st.rights}>© 2024. DASCOURSE</p>
    </footer>
  }

  return <footer className={st.wrapLarge}>
    <div className={st.blockLogo}>
      <Link link={`#${anchor.begin}`}>
        <Image
          src="/logoText.svg"
          height={48}
          width={248}
          alt="Logo dashcourse"
          className={st.logo}
        />
      </Link>
      <p className={st.rights}>© 2024. DASCOURSE</p>
    </div>
    <div className={st.blocksRow}>
      <div className={cn(st.block, st.blockFirst)}>
        <Link link={`#${anchor.about}`}>О компании</Link>
        <Link link={`#${anchor.advantages}`}>Преимущества</Link>
        <Link link={`#${anchor.objects}`}>Объекты</Link>
        <Link link={`#${anchor.reviews}`}>Отзывы</Link>
      </div>
      <div className={st.blocksColumn}>
        <div className={st.block}>
          <p className={st.text}>Адрес: 125040, город Москва, Ленинградский пр-кт, д. 34а, помещ. 1305</p>
          <p className={st.text}>ОГРН 1247700371313</p>
          <p className={st.text}>ИНН 9714049826</p>
          <a className={st.text} href={'/files/cookies_DAS_PDF.pdf'} target="_blank">Cookies</a>
        </div>
        {/*TODO сделать переход*/}
        <Button className={st.button} onClick={() => {
        }}>Свяжитесь с нами</Button>
      </div>
    </div>
  </footer>
}