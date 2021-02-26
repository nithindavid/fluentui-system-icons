import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const GroupDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 5a2 2 0 11-4 0 2 2 0 014 0zm14 0a2 2 0 11-4 0 2 2 0 014 0zM7 19a2 2 0 11-4 0 2 2 0 014 0zM8 5a3 3 0 01-.17 1h4.67c.28 0 .5.22.5.5V9h-1.5A2.5 2.5 0 009 11.5V13H6.5a.5.5 0 01-.5-.5V7.83a3 3 0 01-2 0v4.67A2.5 2.5 0 006.5 15H9v2.5a2.5 2.5 0 002.5 2.5 6.48 6.48 0 01-.5-2.5v-6c0-.28.22-.5.5-.5h6c.89 0 1.73.18 2.5.5A2.5 2.5 0 0017.5 9H15V6.5A2.5 2.5 0 0012.5 4H7.83A3 3 0 018 5zm15 12.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
};

export default GroupDismiss24Filled;