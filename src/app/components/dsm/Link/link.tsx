import React from "react";
import LinkNext from 'next/link'
import st from "./link.module.scss";

type PropsType = {
  children: React.ReactNode;
  link: string;
  onClick?: () => void;
}

export const Link: React.FC<PropsType> = ({children, link, onClick}) => {
  return <LinkNext className={st.link} href={link} onClick={onClick}>{children}</LinkNext>
}