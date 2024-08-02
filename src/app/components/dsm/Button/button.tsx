import React from "react";

import st from './button.module.scss';
import {Icon} from "@/app/components/dsm/Icon";
import cn from "classnames";

type PropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  withoutIcon?: boolean;
  type?: "button" | "submit" | "reset";
}
export const Button: React.FC<PropsType> = ({children, type = 'button', onClick, className, isDisabled, withoutIcon}) => {
  return <button type={type} className={cn(st.button, withoutIcon && st.withoutIcon, className)} onClick={() => onClick?.()} disabled={isDisabled}>
    {!withoutIcon && <span className={st.emptyIcon}></span>}
    <span className={st.text}>{children}</span>
    {!withoutIcon && <span className={st.circle}><Icon type="arrowDiag" /></span>}
  </button>
}