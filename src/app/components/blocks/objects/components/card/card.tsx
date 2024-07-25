import React from "react";

import st from './card.module.scss';

type PropsType = {
  img: string;
  square: string;
  title: string;
  subtitle: string;
}

export const Card: React.FC<PropsType> = ({img, square, title, subtitle}) => {
  return <div className={st.wrap}>
    <div className={st.image} style={{backgroundImage: `url(${img})`}}></div>
    <div className={st.square}>{square}</div>
    <div className={st.textWrap}>
      <p className={st.title}>{title}</p>
      <p className={st.subtitle}>{subtitle}</p>
    </div>
  </div>
}