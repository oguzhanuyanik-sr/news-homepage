import Link from 'next/link';
import React from 'react';

interface NewPostProps {
  isLast: boolean;
  title: string;
  desc: string;
  url: string;
}

const NewPost = ({ isLast, title, desc, url }: NewPostProps) => {
  return (
    <div
      className={`${isLast ? '' : 'border-b border-grey pb-[30px] mb-[30px]'}`}
    >
      <h3 className='text-white font-extrabold text-xl leading-6 lg:text-xl lg:leading-6 mb-2 hover:text-yellow transition-all'>
        <Link href={url}>{title}</Link>
      </h3>
      <p className='text-grey text-[15px] leading-[26px]'>{desc}</p>
    </div>
  );
};

export default NewPost;
