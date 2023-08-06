import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const defaultClassName =
    "border border-off-white border-opacity-5 bg-opacity-5 bg-off-white rounded flex items-center justify-between px-3 py-4";
  const classNames = twMerge(defaultClassName, className);

  return <div className={classNames}>{children}</div>;
};

export default Card;
