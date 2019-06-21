import config from '../config';

export default function prefixClass(name: string): string {

  return `${config.prefixCls}-${name}`;
}
