"use client"
import {Carousel} from "react-responsive-carousel";

import st from './trading.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, {createRef, RefObject, useContext, useEffect, useState} from "react";
import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {Card} from "@/app/components/blocks/trading/components/card/card";
import {Icon} from "@/app/components/dsm/Icon";
import cn from "classnames";
import {anchor} from "@/app/constants/anchor";
import {CSSTransition} from "react-transition-group";

const CARDS = [
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/first.svg",
    title: "Анализ рынка",
    subtitle: "Проведение детального анализа рынка коммерческой недвижимости, и помощь с выбором наиболее перспективного направления для инвестиций.",
  },
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/second.svg",
    title: "Инвестиционная стратегия",
    subtitle: 'На основе данных разрабатывается инвестиционная стратегия.'
  },
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/third.svg",
    title: "Бизнес-план",
    subtitle: 'Разработка детального бизнес-плана, включающих описание проекта, финансовую модель, маркетинговый план и стратегию выхода.'
  },
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/forth.svg",
    title: "Цикл актива",
    subtitle: 'Проведение необходимых работ по улучшению объекта, чтобы повысить его привлекательность и доходность.'
  },
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/fifth.svg",
    title: "Высокая доходность",
    subtitle: 'Помощь с управлением инвестициями, оптимизация расходов и повышение эффективности использования помещения.'
  },
  {
    nodeRef: createRef() as RefObject<HTMLDivElement>,
    img: "/trading/six.svg",
    title: "Управление активом",
    subtitle: 'Непрерывный мониторинг рыночных тенденций. Это поможет вам поддерживать ценность ваших активов и максимизировать их доходность.'
  }
]

export const Trading = () => {
  const {screenSize, screenWidth} = useContext(ContextForScreenSize);
  const [currentIndex, setSlide] = useState(0)
  const setPrevSlide = () => setSlide(currentIndex > 0 ? currentIndex - 1 : 0);
  const setNextSlide = () => setSlide(currentIndex < CARDS.length ? currentIndex + 1 : CARDS.length);

  if (screenSize === 's') {
    const countCart = (screenWidth - 24) / 258
    const centerSlidePercentage = 100 / countCart;
    return <div className={st.wrapSmall}>
      <h3 className={st.title}>Инвестируйте с DASCOURSE</h3>
      <Carousel
        swipeable
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        showThumbs={false}
      >
        {CARDS.map((card, index) => {
          return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle}/>
        })}
      </Carousel>
    </div>
  }

  if (screenSize === 'm') {
    const countCart = (screenWidth - 80) / 270
    const centerSlidePercentage = 100 / countCart;
    const nextDisabled = currentIndex > (CARDS.length - Math.floor(countCart));

    return <div className={st.wrapMedium}>
      <div className={st.title}>
        <h3 className={st.titleText}>Инвестируйте с DASCOURSE</h3>
        <div className={st.buttonControl}>
          <button
            className={cn(st.arrowButton, currentIndex === 0 && st.arrowDisabled)}
            onClick={setPrevSlide}
            disabled={currentIndex === 0}>
            <Icon type="arrowBack"/>
          </button>
          <button
            className={cn(st.arrowButton, nextDisabled && st.arrowDisabled)}
            onClick={setNextSlide}
            disabled={nextDisabled}>
            <Icon type="arrowForward"/>
          </button>
        </div>
      </div>
      <Carousel
        swipeable
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        selectedItem={currentIndex}
        onChange={setSlide}
        showThumbs={false}
      >
        {CARDS.map((card) => {
          return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle}/>
        })}
      </Carousel>
    </div>
  }

  const cards = CARDS.map((card) => {
    return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle}/>
  })

  if (screenSize === 'l') {
    return <div className={st.wrapLarge}>
      <h3 className={st.titleText}>Инвестируйте с DASCOURSE</h3>
      <div className={st.blocks}>
        {cards}
      </div>
    </div>
  }

  return <div className={st.wrapExtraLarge}>
    <h3 className={st.titleText}>Инвестируйте с DASCOURSE</h3>
    <div className={st.blocks}>
      {cards}
    </div>
  </div>
}