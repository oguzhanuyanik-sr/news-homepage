import Link from 'next/link';
import React from 'react';

type Props = {};

const NewPost = ({ isLast, title, desc, url }: Props) => {
  return (
    <div
      className={`${isLast ? '' : 'border-b border-grey pb-[30px] mb-[30px]'}`}
    >
      <h3 className='text-white font-extrabold text-xl leading-6 md:text-xl md:leading-6 mb-2 hover:text-yellow transition-all'>
        <Link href={url}>{title}</Link>
      </h3>
      <p className='text-grey text-[15px] leading-[26px]'>{desc}</p>
    </div>
  );
};

export default NewPost;