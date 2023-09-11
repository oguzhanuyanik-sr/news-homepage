import React from 'react';
import { newPosts } from '@/app/api/response.json';
import NewPost from '../common/new-post';

type Props = {};

const News = (props: Props) => {
  return (
    <section className='bg-darkBlue mt-16 p-5'>
      <h2 className='text-yellow font-bold text-[32px] leading-[32px] md:text-[40px] md:leading-[40px] mb-[35px]'>
        New
      </h2>
      {newPosts.map(({ title, desc, url }, index) => (
        <NewPost
          key={index}
          isLast={index === newPosts.length - 1}
          title={title}
          desc={desc}
          url={url}
        />
      ))}
    </section>
  );
};

export default News;
