import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const PopularPost = ({ post }: Props) => {
  const { id, title, desc, url, img } = post;

  return (
    <div className='flex gap-6 mb-8'>
      <div className='flex items-center'>
        <Link href={url}>
          <Image
            src={img}
            alt={title}
            height={127}
            width={100}
            className='min-w-[100px]'
          />
        </Link>
      </div>
      <div className='flex flex-col justify-center'>
        <span className='block text-grey text-[32px] leading-[32px] font-bold mb-3'>
          {id}
        </span>
        <Link href={url}>
          <h4 className='block text-darkBlue text-lg leading-6 font-extrabold mb-[9px] hover:text-orange transition-all'>
            {title}
          </h4>
        </Link>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PopularPost;
