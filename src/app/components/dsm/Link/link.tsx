import React from "react";
import LinkNext from 'next/link'
import st from "./link.module.scss";

type PropsType = {
  children: React.ReactNode;
  link: string;
  onClick?: () => void;
  target?: string;
}

export const Link: React.FC<PropsType> = ({children, link, onClick, target}) => {
  return <LinkNext  target={target} className={st.link} href={link} onClick={onClick}>{children}</LinkNext>
}