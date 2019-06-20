

import * as React from 'react';
import classNames from 'classnames';
import prefixClass from '../util/prefix-class';


export interface Props {
  children: any;
  className?: string;
  [prop: string]: any;
};


export default function ListItem(props: Props) {
  const {className, children, ...rest} = props;
  const cls = classNames(className, prefixClass('list-item'), {
    [prefixClass('list-item-enable-active')]: !!rest.onClick
  });

  return (
    <div {...rest} className={cls}>
      <div className='content-wrap'>{children}</div>
    </div>
  );
}



