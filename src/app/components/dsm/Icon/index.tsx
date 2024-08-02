import React from 'react';
import cn from 'classnames';
import { IconType, Sizes } from './types';

import st from './style.module.scss';

interface PropsType {
  type: IconType;
  onClick?: () => void;
  className?: string;
  size?: Sizes;
  tabindex?: number
}

/**
 * Компонент с иконками
 * */
export const Icon: React.FC<PropsType> = ({ className, type = 'pin', size = 'm', tabindex, onClick }) => {
    return (
      <i
        className={cn(st.wrap, st[size], className)}
        tabIndex={tabindex}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={st.path}
        >
          <use xlinkHref={`/sprite.svg#${type}`} />
        </svg>
      </i>
    );
    }
