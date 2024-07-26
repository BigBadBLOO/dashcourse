"use client"
import React, {useContext} from "react";
import Image from 'next/image'

import {Icon} from "@/app/components/dsm/Icon";
import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {anchor} from "@/app/constants/anchor";
import {Menu} from "@/app/components/layout/header/menu";
import {Link} from "@/app/components/dsm/Link/link";
import {emailLink} from "@/app/constants/emailLink";

import st from './header.module.scss';

export const Header = () => {
  const {screenSize} = useContext(ContextForScreenSize);

  if (screenSize === 'l' || screenSize === 'xl') {
    return <header id={anchor.begin} className={st.wrap}>
      <Image
        priority
        src="/logo.svg"
        width={280}
        height={48}
        alt="Logo dashcourse"
      />
      <div className={st.linkBlock}>
        <Link link={`#${anchor.about}`}>О компании</Link>
        <Link link={`#${anchor.objects}`}>Объекты</Link>
        <Link link={`#${anchor.reviews}`}>Отзывы</Link>
      </div>
      <div className={st.block}>
        <Link link={emailLink}>
          <Icon type="email" className={st.social} />
        </Link>
        <Link link="tel:+78004442091">
          <Icon type="phone" className={st.social} />
        </Link>
      </div>
    </header>
  }

  return (
    <header id={anchor.begin} className={st.wrap}>
      <div className={st.block}>
        <Menu />
      </div>
      <Image
        priority
        src="/logo.svg"
        width={159}
        height={28}
        alt="Logo dashcourse"
      />
      <div className={st.block}>
        <Link link={emailLink}>
          <Icon type="email" className={st.social} />
        </Link>
        <Link link="tel:+78004442091">
          <Icon type="phone" className={st.social} />
        </Link>
      </div>
    </header>
  )
}