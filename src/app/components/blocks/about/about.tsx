"use client"
import {Button} from "@/app/components/dsm/Button/button";
import React, {createRef, RefObject, useContext, useEffect, useRef} from "react";
import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {CSSTransition} from "react-transition-group";
import {anchor} from "@/app/constants/anchor";

import st from './about.module.scss';
import {TitleAnimation} from "@/app/components/titleAnimation/titleAnimation";
import {useObserver} from "@/app/hooks/useObserver";

const IMAGE_SUBTITLE = {
  'small': <h2 className={st.imageSubtitle}>DASCOURSE &mdash; инвестиционная компания, ориентированная на коммерческую
    недвижимость в России и за рубежом.</h2>,
  'large': <h2 className={st.imageSubtitle}>
    DASCOURSE &mdash; инвестиционная компания, ориентированная на коммерческую недвижимость в России и за рубежом. Мы
    предлагаем готовый арендный бизнес с выстроенной структурой и инвестирование в различные виды коммерческой
    недвижимости.
  </h2>
}

const CARDS = (size: string) => [
  {
    title: 'Доходность',
    subtitle: 'от 25%',
    nodeRef: createRef() as RefObject<HTMLDivElement>,
  },
  {
    title: 'Порог входа',
    subtitle: 'от 15 млн ₽',
    nodeRef: createRef() as RefObject<HTMLDivElement>,
  },
  {
    title: 'Средний срок реализации',
    subtitle: size == 'xl' ? '8 - 12 месяцев' : '8 - 12 мес.',
    nodeRef: createRef() as RefObject<HTMLDivElement>,
  }
]
export const About = () => {
  const {screenSize} = useContext(ContextForScreenSize);
  const showBlock = useObserver(anchor.tradings, {threshold: 0});

  const [show, setShow] = React.useState(0);
  const [titleShow, setTitleShow] = React.useState(false);

  useEffect(() => {
    if(showBlock) setShow(1)
  }, [showBlock]);

  useEffect(() => {
    setTitleShow(true)
  }, []);

  return <div className={st.wrap}>
    <div className={st.image}>
      <TitleAnimation show={titleShow}>
          <h1 className={st.imageTitle}>
            Надежный партнер <br className={st.newLine}/>в сохранении и приумножении капитала
          </h1>
          {screenSize === 's' ? IMAGE_SUBTITLE.small : IMAGE_SUBTITLE.large}
          <Button className={st.imageButton} onClick={() => {
          }} withoutIcon={screenSize !== 'xl'}>Инвестировать</Button>
      </TitleAnimation>
    </div>
    <div className={st.cards}>
      {CARDS(screenSize).map(({title, subtitle, nodeRef}, index) => (
        <CSSTransition
          key={index}
          nodeRef={nodeRef}
          timeout={700}
          classNames={{
            enter: st.enter,
            enterActive: st.enterActive,
            enterDone: st.enterDone,
          }}
          in={index < show}
          onEntered={() => setShow(prevState => prevState + 1)}
        >
          <div ref={nodeRef} className={st.card}>
            <p className={st.title}>{title}</p>
            <p className={st.subtitle}>{subtitle}</p>
          </div>
        </CSSTransition>
      ))}
    </div>
  </div>
}