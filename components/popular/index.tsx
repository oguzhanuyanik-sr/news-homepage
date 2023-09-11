import React from 'react';
import PopularPost from '../common/popular-post';
import { topPosts } from '@/app/api/response.json';

const Popular = () => {
  return (
    <section className='mt-16 md:flex md:gap-8'>
      {topPosts.map((post, index) => (
        <PopularPost key={index} post={post} />
      ))}
    </section>
  );
};

export default Popular;
