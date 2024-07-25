import React, {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import st from "./titleAnimation.module.scss";

type PropsType = {
  children: React.ReactNode;
  show: boolean;
}

export const TitleAnimation: React.FC<PropsType> = ({show, children}) => {
  const titleRef = useRef(null);

  return <CSSTransition
    nodeRef={titleRef}
    timeout={1500}
    classNames={{
      enter: st.enterTitle,
      enterActive: st.enterTitleActive,
      enterDone: st.enterTitleDone,
    }}
    in={show}
  >
    <div className={st.wrap} ref={titleRef}>{children}</div>
  </CSSTransition>
}