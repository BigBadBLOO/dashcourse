import React from "react";

import st from './card.module.scss';

type PropsType = {
  texts: string[];
  title: string;
  subtitle: string;
}

export const Card: React.FC<PropsType> = ({texts, title, subtitle}) => {
  return <div className={st.wrap}>
    <div className={st.textsWrap}>
      {texts.map((text, i) => <p key={i} className={st.text}>{text}</p>)}
    </div>
    <div className={st.textWrap}>
      <p className={st.title}>{title}</p>
      <p className={st.subtitle}>{subtitle}</p>
    </div>
  </div>
}