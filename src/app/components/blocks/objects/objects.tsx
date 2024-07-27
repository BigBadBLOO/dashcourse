"use client"
import {Carousel} from "react-responsive-carousel";
import React, {useContext, useState} from "react";
import cn from "classnames";

import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {Card} from "@/app/components/blocks/objects/components/card/card";
import {Icon} from "@/app/components/dsm/Icon";
import {useObserver} from "@/app/hooks/useObserver";
import {anchor} from "@/app/constants/anchor";
import {TitleAnimation} from "@/app/components/titleAnimation/titleAnimation";


import st from './objects.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CARDS = [
  {
    img: "/objects/01.webp",
    square: '127,7 м²',
    title: "Коммерческое помещение по улице Ананьевский переулок",
    subtitle: 'Помещение в зоне деловой активности и жилого массива с высокой покупательской способностью. ',
  },
  {
    img: "/objects/02.webp",
    square: '124,6 м²',
    title: "Готовый арендный бизнес в ЦАО г. Москва",
    subtitle: 'Торговое помещение свободного назначения площадью 124.6 м² на цокольном этаже жилого дома в историческом центре Москвы.'
  },
  {
    img: "/objects/03.webp",
    square: '173,9 м²',
    title: "Коммерческое помещение по улице Бахрушина 1",
    subtitle: 'Отличное местоположение в пешей доступности от метро Новокузнецкая/ Третьяковская/ Павелецкая, с удобной транспортной доступностью. Помещение расположено в историческом центре Замоскворечье.'
  },
]

export const Objects = () => {
  const {screenSize, screenWidth} = useContext(ContextForScreenSize);
  const [currentIndex, setSlide] = useState(0)
  const setPrevSlide = () => setSlide(currentIndex > 0 ? currentIndex - 1 : 0);
  const setNextSlide = () => setSlide(currentIndex < CARDS.length ? currentIndex + 1 : CARDS.length);
  const showHeader = useObserver(anchor.objects, {threshold: 0.2});

  if (screenSize === 's') {
    const countCart = (screenWidth - 24) / 336
    const centerSlidePercentage = 100 / countCart;

    return <div className={st.wrapSmall}>
      <TitleAnimation show={showHeader}>
        <h3 className={st.title}>Успешно реализованные объекты</h3>
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
        {CARDS.map((card) => {
          return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle} square={card.square}/>
        })}
      </Carousel>
    </div>
  }

  if (screenSize === 'm') {
    const countCart = (screenWidth - 80) / 616
    const centerSlidePercentage = 100 / countCart;
    const nextDisabled = currentIndex >= (CARDS.length - Math.floor(countCart));

    return <div className={st.wrapMedium}>
      <div className={st.title}>
        <TitleAnimation show={showHeader}>
          <h3 className={st.titleText}>Успешно реализованные объекты</h3>
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
          return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle} square={card.square}/>
        })}
      </Carousel>
    </div>
  }

  if (screenSize === 'l' || screenSize === 'xl') {
    const countCart = (screenWidth - 184) / 568
    const centerSlidePercentage = 100 / countCart;
    const nextDisabled = currentIndex > (CARDS.length - Math.floor(countCart)) || CARDS.length - Math.floor(countCart) === 0;

    return <div className={st.wrapLarge}>
      <div className={st.title}>
        <TitleAnimation show={showHeader}>
          <h3 className={st.titleText}>Успешно реализованные объекты</h3>
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
          return <Card key={card.img} img={card.img} title={card.title} subtitle={card.subtitle} square={card.square}/>
        })}
      </Carousel>
    </div>
  }
  return null;
}