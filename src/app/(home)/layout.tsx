import EbookAnchor from '@/components/EbookAnchor';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <Main className="border-t-[20px] border-brand-purple">
        { children }
      </Main>
      <div>
        <EbookAnchor />
        <Footer />
      </div>
    </div>
  );
}
