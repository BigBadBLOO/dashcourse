"use client"
import {Button} from "@/app/components/dsm/Button/button";
import {useEffect, useRef, useState} from "react";

import st from './cookie.module.scss';

const APPLY_COOKIE = 'APPLY_COOKIE';

const debounce = (func: any, timeout = 300) => {
  let timer: any;
  return (...args: any []) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const Cookie = () => {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calc = () => {
      const bodyMinWidthStr = getComputedStyle(document.body).minWidth;
      const bodyMinWidthNumber = Number(bodyMinWidthStr.replace(/[^0-9]/g, ""));
      const resizeCoef = window.innerWidth / bodyMinWidthNumber;
      const containerHeight = containerRef.current?.offsetHeight || 85;

      return (window.innerHeight  + window.scrollY - containerHeight - 20) / resizeCoef
    }

    const debounceFn = debounce(() => setTop(calc()))
    addEventListener('scroll', debounceFn)
    debounceFn()

    return () => removeEventListener('scroll', debounceFn)
  }, []);

  useEffect(() => {
    const apply = localStorage.getItem(APPLY_COOKIE);
    if (!apply) setShow(true);
  }, [])

  if (!show) return null;

  return <div ref={containerRef} className={st.wrap} style={{top}}>
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