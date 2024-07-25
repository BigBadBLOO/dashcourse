"use client"
import {Carousel} from "react-responsive-carousel";
import React, {useContext, useState} from "react";
import cn from "classnames";

import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {Card} from "@/app/components/blocks/reviews/components/card/card";
import {Icon} from "@/app/components/dsm/Icon";
import {useObserver} from "@/app/hooks/useObserver";
import {anchor} from "@/app/constants/anchor";
import {TitleAnimation} from "@/app/components/titleAnimation/titleAnimation";

import st from './reviews.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CARDS = (size: string) => [
  {
    texts: ['Раньше я просто держал деньги на счету, но понимал, что они могли бы приносить больше пользы. Начинать инвестировать было страшно, но DASCOURSE взяли на себя все сложности и помогли разработать правильную стратегию инвестирования. Благодаря их работе я не только приумножил свой капитал, но и получил ценный опыт инвестирования.'],
    title: "Дмитрий",
    subtitle: 'Инвестор DASCOURSE',
  },
  {
    texts: [
      'Я всегда искал способ, чтобы мои деньги приносили пассивный доход. Доходность в небанковском кредитовании меня заинтересовала, так как она выше реальной инфляции.',
      'Я выбрал DASCOURSE, потому что они предлагают стабильную доходность выше 25% даже с учетом возможных дефолтов. Благодаря этому, я смог не только сохранить свой капитал, но и увеличить его даже в нестабильное время.'
    ],
    title: "Александр",
    subtitle: 'Инвестор DASCOURSE',
  },
  {
    texts: [
      'DASCOURSE провели тщательный анализ рынка и предложили мне инвестиционный проект, отвечающий моим целям и риск-профилю. DASCOURSE не просто помогли мне приобрести актив, они взяли на себя все этапы управления недвижимостью: от реновации и модернизации до поиска арендаторов и эффективного управления арендными отношениями. Благодаря их профессионализму, я получил стабильный доход от аренды и значительно увеличил свою инвестиционную прибыль.',
      size !== 's'
        ? 'Особо хочу отметить отзывчивость и открытость сотрудников DASCOURSE в решении любых вопросов. Они всегда были на связи и предоставляли мне подробную информацию о ходе проекта.'
        : ''
    ],
    title: "Валентин",
    subtitle: 'Инвестор DASCOURSE',
  },
]

const CARD_WIDTH = {
  's': 336,
  'm': 530,
  'l': 530,
  'xl': 572,
}

const PAGE_PADDING = {
  's': 24,
  'm': 80,
  'l': 184,
  'xl': 184,
}

export const Reviews = () => {
  const {screenSize, screenWidth} = useContext(ContextForScreenSize);
  const [currentIndex, setSlide] = useState(0)
  const setPrevSlide = () => setSlide(currentIndex > 0 ? currentIndex - 1 : 0);
  const setNextSlide = () => setSlide(currentIndex < CARDS(screenSize).length ? currentIndex + 1 : CARDS(screenSize).length);
  const showHeader = useObserver(anchor.reviews, {threshold: 0.2});

  if (screenSize === 's') {
    const countCart = (screenWidth - PAGE_PADDING[screenSize]) / CARD_WIDTH[screenSize]
    const centerSlidePercentage = 100 / countCart;

    return <div className={st.wrapSmall}>
      <TitleAnimation show={showHeader}>
        <h3 className={cn(st.titleText, st.title)}>Отзывы инвесторов</h3>
      </TitleAnimation>
      <Carousel
        swipeable
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        showThumbs={false}
      >
        {CARDS(screenSize).map((card) => {
          return <Card key={card.title} title={card.title} subtitle={card.subtitle} texts={card.texts}/>
        })}
      </Carousel>
    </div>
  }


  const countCart = (screenWidth - PAGE_PADDING[screenSize]) / CARD_WIDTH[screenSize]
  const centerSlidePercentage = 100 / countCart;

  let nextDisabled = (screenSize === 'm'
    ? currentIndex >= (CARDS(screenSize).length - Math.floor(countCart))
    : currentIndex > (CARDS(screenSize).length - Math.floor(countCart))) || CARDS(screenSize).length - Math.floor(countCart) === 0;

  return <div className={st.wrap}>
    <div className={st.title}>
      <TitleAnimation show={showHeader}>
        <h3 className={st.titleText}>Отзывы инвесторов</h3>
      </TitleAnimation>
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
          <Icon type="arrowForward" />
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
      {CARDS(screenSize).map((card) => {
        return <Card key={card.title} title={card.title} subtitle={card.subtitle} texts={card.texts}/>
      })}
    </Carousel>
  </div>

}