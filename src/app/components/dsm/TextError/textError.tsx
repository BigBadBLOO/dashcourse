import React from "react";

import {Icon} from "@/app/components/dsm/Icon";

import st from "./style.module.scss";
import cn from "classnames";

type PropsType = {
  children: React.ReactNode;
  className?: string;
}

export const TextError: React.FC<PropsType> = ({children, className}) => {
  return <p className={cn(st.textError, className)}>
    <Icon size="s" type="errorWarning" className={st.errorIcon}/>
    <span>{children}</span>
  </p>
}