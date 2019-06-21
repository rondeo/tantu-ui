
import * as React from 'react';
import classNames from 'classnames';
import prefixClass from '../util/prefix-class';
import './style.scss';

export interface Props {
  direction: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
};


export default function Arrow(props: Props) {
  const {direction, className, ...rest} = props;
  const cls = classNames(prefixClass('arrow'), direction, className);

  return (
    <span {...rest} className={cls} />
  );
}

