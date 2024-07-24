"use client"
import {Button} from "@/app/components/dsm/Button/button";
import {useEffect, useState} from "react";

import st from './cookie.module.scss';

const APPLY_COOKIE = 'APPLY_COOKIE';

export const Cookie = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const apply = localStorage.getItem(APPLY_COOKIE);
    if (!apply) setShow(true);
  }, [])

  if (!show) return null;

  return <div className={st.wrap}>
    <p className={st.text}>
      Пользуясь нашим сайтом, Вы соглашаетесь с тем, что мы используем <a className={st.link} href={'/files/cookies_DAS_PDF.pdf'} target="_blank">Cookies</a>
    </p>
    <div className={st.buttonWrap}>
      <Button className={st.button} withoutIcon onClick={() => {
        localStorage.setItem(APPLY_COOKIE, 'true');
        setShow(false);
      }}>Ок</Button>
    </div>
  </div>
}