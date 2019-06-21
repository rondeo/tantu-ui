

import * as React from 'react';
import classNames from 'classnames';
import prefixClass from '../util/prefix-class';
import Arrow from '../Arrow';


export interface Props {
  children: any;
  className?: string;
  arrow?: 'top' | 'bottom' | 'left' | 'right';
  onClick?: () => void;
};


export default function ListItem(props: Props) {
  const {className, children, arrow, ...rest} = props;
  const cls = classNames(className, prefixClass('list-item'), {
    [prefixClass('list-item-enable-active')]: !!rest.onClick
  });

  return (
    <div {...rest} className={cls}>
      <div className='content-wrap'>{children}</div>
      {arrow ? (
        <div className='arrow'>
          <Arrow direction={arrow} />
        </div>
      ) : null}
    </div>
  );
}



