"use client"
import React, {useContext, useState} from "react";
import st from './advantages.module.scss';
import AnimateHeight from "react-animate-height";
import {Icon} from "@/app/components/dsm/Icon";
import cn from "classnames";
import {ContextForScreenSize} from "@/app/components/screenSize/context";
import {useObserver} from "@/app/hooks/useObserver";
import {anchor} from "@/app/constants/anchor";
import {TitleAnimation} from "@/app/components/titleAnimation/titleAnimation";

const BLOCS = [
  {
    title: 'Объекты с долгосрочными арендаторами и стабильный доход',
    subtitle: 'Благодаря тщательном анализу рынка, мы стремимся предложить нашим инвесторам не только надежные объекты недвижимости, но и готовую модель для бизнес-инвестиций .',
    image: '/advantages/01.webp'
  },
  {
    title: 'Профессиональная команда',
    subtitle: 'Наша компания состоит из опытных специалистов в сфере коммерческой недвижимости — мы берем на себя все этапы инвестирования, чтобы вы могли сосредоточиться на своих бизнес-целях.',
    image: '/advantages/02.webp'
  },
  {
    title: 'Все финансовые операции прозрачны и доступны для проверки',
    subtitle: 'Мы ценим доверие наших клиентов и обеспечиваем полную прозрачность всех финансовых операций. Все документы и отчеты доступны для проверки в любое время.',
    image: '/advantages/03.webp'
  },
  {
    title: 'Порог входа от 15 млн. ₽',
    subtitle: 'Мы делаем инвестирование в коммерческую недвижимость доступным для широкого круга инвесторов.',
    image: '/advantages/04.webp'
  },
  {
    title: 'Годовая доходность не ниже 25%',
    subtitle: 'DASCOURSE поможет обрести стабильный и безопасный источник дохода, который значительно выше, чем процентные ставки по депозитам, а также увеличить свой долгосрочный капитал.',
    image: '/advantages/05.webp'
  }
]

export const Advantages = () => {
  const {screenSize} = useContext(ContextForScreenSize);
  const [selected, setSelected] = useState<number | null>(null)
  const showHeader = useObserver(anchor.advantages, {threshold: 0.2});

  return <div>
    <TitleAnimation show={showHeader}>
      <h3 className={st.titleBlock}>
        {screenSize === 's' || screenSize === 'm' ? 'Преимущества DASCOURSE' : 'Преимущества сотрудничества с DASCOURSE'}
      </h3>
    </TitleAnimation>
    <div className={st.wrap}>
      <div className={st.blocks}>
        {BLOCS.map((block, i) => {
          const isSelected = selected === i;

          return <button
            key={i}
            className={cn(st.block, isSelected && st.blocksSelected)}
            type="button"
            onClick={() => setSelected(i === selected ? null : i)}
          >
            <div className={st.titleWrap}>
              <div className={st.textWrap}>
                <span className={st.index}>0{i + 1}</span>
                <div>
                  <p className={st.title}>{block.title}</p>
                  <AnimateHeight duration={200} height={isSelected ? 'auto' : 0} easing="linear">
                    <p className={st.subtitle}>{block.subtitle}</p>
                  </AnimateHeight>
                </div>
              </div>
              <Icon className={cn(st.icon, isSelected && st.iconSelected)} type="arrowDown"/>
            </div>
          </button>
        })}
      </div>
      <div className={st.images}>
        {BLOCS.map((block, i) => {
          return <div
            key={i}
            className={cn(st.image, (selected ? i === selected : i === 0) && st.imageSelected)}
            style={{backgroundImage: `url(${block.image})`}}/>
        })}
      </div>
    </div>
  </div>
}