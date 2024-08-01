"use client"
import React, {useContext} from "react";
import Image from "next/image";
import cn from "classnames";

import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {Link} from "@/app/components/dsm/Link/link";
import {anchor} from "@/app/constants/anchor";
import {emailLink} from "@/app/constants/emailLink";

import st from './footer.module.scss';

const phoneText = '8 (800) 444-20-91';

export const Footer = () => {
  const {screenSize} = useContext(ContextForScreenSize);

  if (screenSize === 's') {
    return <footer className={st.wrapSmall}>
      <Link link={`#${anchor.begin}`}>
        <Image
          src="/logoText.svg"
          width={248}
          height={30}
          alt="Logo dashcourse"
          priority
        />
      </Link>
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
        <Link link={`/files/cookies_DAS_PDF.pdf`}>Cookies</Link>
      </div>
      <div className={cn(st.block, st.button)}>
        <Link target="_blank" link={emailLink}>
          info@dascourse.com
        </Link>
        <Link target="_blank" link="tel:+78004442091">
          {phoneText}
        </Link>
      </div>
      <p className={st.rights}>© 2024. DASCOURSE</p>
    </footer>
  }

  if (screenSize === 'm') {
    return <footer className={st.wrapMedium}>
      <Link link={`#${anchor.begin}`}>
        <Image
          priority
          src="/logoText.svg"
          width={248}
          height={30}
          alt="Logo dashcourse"
        />
      </Link>
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
            <Link link={`/files/cookies_DAS_PDF.pdf`}>Cookies</Link>
          </div>
          <div className={st.block}>
            <Link target="_blank" link={emailLink}>
              info@dascourse.com
            </Link>
            <Link target="_blank" link="tel:+78004442091">
              {phoneText}
            </Link>
          </div>
        </div>
      </div>

      <p className={st.rights}>© 2024. DASCOURSE</p>
    </footer>
  }

  return <footer className={st.wrapLarge}>
    <div className={st.blockLogo}>
      <Link link={`#${anchor.begin}`}>
        <Image
          priority
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
          <Link link={`/files/cookies_DAS_PDF.pdf`}>Cookies</Link>
        </div>
        <div className={st.block}>
          <Link target="_blank" link={emailLink}>
            info@dascourse.com
          </Link>
          <Link target="_blank" link="tel:+78004442091">
            {phoneText}
          </Link>
        </div>
      </div>
    </div>
  </footer>
}