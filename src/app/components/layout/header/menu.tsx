import React, {useRef} from "react";
import {CSSTransition} from 'react-transition-group';
import {Icon} from "@/app/components/dsm/Icon";
import {anchor} from "@/app/constants/anchor";

import st from './menu.module.scss';


export const Menu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const nodeRef = useRef(null);

  const togglePopup = () => setOpenMenu(!openMenu);

  return <>
    <button className={st.button} type="button" onClick={togglePopup}><Icon className={st.social} type="menu"/></button>
    <CSSTransition nodeRef={nodeRef} in={openMenu} timeout={200} unmountOnExit classNames={{
      enter: st.enter,
      enterActive: st.enterActive,
      exit: st.exit,
      exitActive: st.exitActive,
    }}>
      <div ref={nodeRef} className={st.menu}>
        <a onClick={togglePopup} href={`#${anchor.about}`}>О компании</a>
        <a onClick={togglePopup} href={`#${anchor.objects}`}>Объекты</a>
        <a onClick={togglePopup} href={`#${anchor.reviews}`}>Отзывы</a>
      </div>
    </CSSTransition>
  </>
}