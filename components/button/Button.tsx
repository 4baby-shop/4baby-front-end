import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

import mapPropsToStyles from 'shared/utils/mapPropsToStyles';
import NextLink from 'next/link';

interface Props {
  color: string;
  href?: string;
  size?: string;
  className?: string;
  [prop: string]: any;
}


export default function Button({ color, href, size = 'md', className, ...props }: Props): JSX.Element {
  const classes = mapPropsToStyles({ color, size }, styles);
  const button = <button className={clsx(classes, className)} {...props}></button>

  return href ? <NextLink href={href} passHref>{ button }</NextLink> : button;
}
