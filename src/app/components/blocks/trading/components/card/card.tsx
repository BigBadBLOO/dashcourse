import Image from "next/image";
import React, {useContext} from "react";
import {ContextForScreenSize} from "@/app/components/screenSize/context";

import st from './card.module.scss';

type PropsType = {
  img: string;
  title: string;
  subtitle: string;
}

const sizes = {
  's': 92,
  'm': 92,
  'l': 150,
  'xl': 150,
} as const;

export const Card: React.FC<PropsType> = ({img, title, subtitle}) => {
  const {screenSize} = useContext(ContextForScreenSize);
  const dimension = sizes[screenSize];

  if (screenSize === 'xl') {
    return <div className={st.wrap}>
      <div className={st.textWrap}>
        <p className={st.title}>{title}</p>
        <p className={st.subtitle}>{subtitle}</p>
      </div>
      <Image
        src={img}
        width={dimension}
        height={dimension}
        alt={title}
        className={st.image}
      />
    </div>
  }

  return <div className={st.wrap}>
    <Image
      src={img}
      width={dimension}
      height={dimension}
      alt={title}
    />
    <p className={st.title}>{title}</p>
    <p className={st.subtitle}>{subtitle}</p>
  </div>
}