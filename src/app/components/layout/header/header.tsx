"use client"
import React, {useContext} from "react";
import Image from 'next/image'
import cn from "classnames";

import {Icon} from "@/app/components/dsm/Icon";
import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {anchor} from "@/app/constants/anchor";
import {Menu} from "@/app/components/layout/header/menu";
import {Link} from "@/app/components/dsm/Link/link";

import st from './header.module.scss';

export const Header = () => {
  const {screenSize} = useContext(ContextForScreenSize);

  if (screenSize === 'l' || screenSize === 'xl') {
    return <div id={anchor.begin} className={st.wrap}>
      <Image
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
        {/* TODO вставить телефон и емаил */}
        <Icon type="email" className={st.social} />
        <Icon type="phone" className={cn(st.social, st.socialDisable)} />
      </div>
    </div>
  }

  return (
    <div id={anchor.begin} className={st.wrap}>
      <div className={st.block}>
        <Menu />
      </div>
      <Image
        src="/logo.svg"
        width={159}
        height={28}
        alt="Logo dashcourse"
      />
      <div className={st.block}>
        {/* TODO вставить телефон и емаил */}
        <Icon type="email" className={st.social} />
        <Icon type="phone" className={cn(st.social, st.socialDisable)} />
      </div>
    </div>
  )
}