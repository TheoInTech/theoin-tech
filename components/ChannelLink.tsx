"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import ArrowUprightIcon from "public/icons/arrow-upright.svg";
import Link from "next/link";
import Card from "./Card";

interface IChannelLink {
  image: ReactNode;
  link: string;
  name: string;
  subscribers: number;
}

const ChannelLink = ({ image, link, name, subscribers }: IChannelLink) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-full transition-all hover:bg-blue-green hover:bg-opacity-10"
    >
      <Card className="flex items-start">
        <div className="flex space-x-3">
          <div className="relative h-16">{image}</div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-off-white">{name}</p>
            <p className="text-off-white font-light ">
              {subscribers.toLocaleString()} subscribers
            </p>
          </div>
        </div>
        <ArrowUprightIcon className="w-3 h-3 text-off-white" />
      </Card>
    </Link>
  );
};

export default ChannelLink;
