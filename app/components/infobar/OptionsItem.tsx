'use client';

import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClick: () => void;
};

export const OptionsItem = ({
    title,
    children,
    onClick,
    open = false,
}: Props) => {

    return (
      <div
        onClick={onClick}
        className="
            flex 
            cursor-pointer 
            items-center 
            justify-between 
            gap-[24px]
        "
      >

      </div>
    )
}