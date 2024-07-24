import React from "react";

import st from './block.module.scss';

type PropsType = {
  children: React.ReactNode;
  id: string;
}

export const Block: React.FC<PropsType> = ({children, id}) => {
  return <div id={id} className={st.wrap}>{children}</div>
}