import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zM13 11a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1c0-1.1.9-2 2-2h5zm2-5a2 2 0 00-2-2H5a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V6z" fill={primaryFill} /></svg>;
};

export default AlignRight20Filled;