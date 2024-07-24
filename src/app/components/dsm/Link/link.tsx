import React from "react";
import LinkNext from 'next/link'
import st from "./link.module.scss";

type PropsType = {
  children: React.ReactNode;
  link: string;
}

export const Link: React.FC<PropsType> = ({children, link}) => {
  return <LinkNext className={st.link} href={link}>{children}</LinkNext>
}