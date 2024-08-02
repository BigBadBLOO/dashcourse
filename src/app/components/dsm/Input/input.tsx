import React from "react";

import {TextError} from "@/app/components/dsm/TextError/textError";

import st from './style.module.scss';
import cn from "classnames";


type PropsType = {
  name: string;
  placeholder: string;
  isError?: boolean;
  message?: string;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
}

export const Input: React.FC<PropsType> = ({name, placeholder, message, isError, type, maxLength}) => {
  return <div className={cn(st.container, isError && st.isError)}>
    <div className={cn(st.wrap, isError && st.wrapError)}>
      <input type={type} className={cn(st.input, isError && st.inputError)} name={name} placeholder={placeholder} maxLength={maxLength} />
    </div>
    {message && (isError ? <TextError className={st.textError}>{message}</TextError> : <p className={st.message}>{message}</p>)}
  </div>
}