import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MusicNote220Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.99 3.02a1 1 0 00-1.29-.8l-7 2.2a1 1 0 00-.7.95v8.13a2.5 2.5 0 101 2V8.37l7-2.19v5.32a2.5 2.5 0 101 2V3.18l-.01-.16z" fill={primaryFill} /></svg>;
};

export default MusicNote220Filled;