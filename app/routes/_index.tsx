import type { MetaFunction } from '@remix-run/node';
import HeroSection from '~/components/home/hero-section';
import Navbar from '~/components/navbar/navbar';
import Notice from '~/components/home/notice/notice';
import Message from '~/components/home/message/message';
import Footer from '~/components/footer/footer';
import NumberSection from '~/components/home/number-section';
import LibrarySection from '~/components/home/library-page/library-section';
import WelcomeIiuc from '~/components/home/welcome-section/welcome-iiuc';
import NewsSection from '~/components/home/news-section';
import QuickOptions from '~/components/home/quick-options';
import Divider from '~/components/divider';
import ResearchSection from '~/components/home/research/research';
import AcademicsSection from '~/components/home/academics/academics';

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
    <div className='min-h-screen flex flex-col bg-[#F5EFEB]'>
      <Navbar />
      <HeroSection />
      <WelcomeIiuc />
      <Notice />
      <NumberSection />
      <NewsSection />
      <ResearchSection />
      <AcademicsSection />
      <QuickOptions />
      <Message />
      <LibrarySection />
      <Divider />
      <Footer />
    </div>
  );
}
