import Featured from '@/components/featured';
import News from '@/components/news';
import Popular from '@/components/popular';

export default function Home() {
  return (
    <>
      <section className='w-full h-full flex flex-wrap justify-between'>
        <Featured />
        <News />
      </section>
      <Popular />
    </>
  );
}
