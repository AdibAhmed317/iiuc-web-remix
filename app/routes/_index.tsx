import type { MetaFunction } from '@remix-run/node';
import HeroSection from '~/components/home/hero-section';
import Navbar from '~/components/navbar/navbar';
import Notice from '~/components/home/notice/notice';
import Message from '~/components/home/message/message';
import NumberSection from '~/components/home/number-section';

export const meta: MetaFunction = () => {
  return [
    { title: 'International Islamic University Chittagong - IIUC' },
    {
      name: 'description',
      content:
        'Explore the International Islamic University Chittagong (IIUC), a premier private university in Bangladesh offering quality education rooted in Islamic values.',
    },
    {
      name: 'keywords',
      content:
        'IIUC, International Islamic University Chittagong, private university Bangladesh, higher education, Islamic studies, engineering, business studies',
    },
    { name: 'author', content: 'International Islamic University Chittagong' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Notice />
      <Message />
      <NumberSection />
    </>
  );
}
