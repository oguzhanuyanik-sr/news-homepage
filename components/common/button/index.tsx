import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  title: string;
  styles: 'blue' | 'orange';
  url: string;
}

const buttonStyles = {
  blue: 'bg-darkBlue hover:bg-orange',
  orange: 'bg-orange hover:bg-darkBlue',
};

const Button = ({ title, styles, url }: ButtonProps) => {
  return (
    <Link
      href={url}
      className={`${buttonStyles[styles]} uppercase text-white text-sm leading-6 font-bold py-5 px-8 inline-block text-center tracking-[4.5px] transition-all`}
    >
      {title}
    </Link>
  );
};

export default Button;
