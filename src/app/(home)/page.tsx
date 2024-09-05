import LogoHorizontal from '@/components/LogoHorizontal';
import Container from '@/components/Container';
import Section from '@/components/Section';
import FormEbook from '@/components/FormEbook';

export default async function Home() {
  return (
    <>
      <Section className="py-12 sm:py-24 md:py-32" backgroundColor="blue-dark">
        <Container className="text-white bg-brand-blue-dark">
          <h1 className="flex items-center justify-center -mt-4 mb-6">
            <LogoHorizontal className="w-full max-w-[50rem] h-auto -ml-4 sm:-ml-6 md:-ml-10" />
            <span className="sr-only">50 Projects for React &amp; the Static Web</span>
          </h1>

          <p className="text-4xl text-center mb-6">
            <strong className="block sm:inline">Learn by doing</strong> with
            this <span className="block sm:inline"><strong className="text-brand-purple-light">FREE</strong> <strong>ebook</strong>!</span>
          </p>

          <FormEbook id="hero" inputClassName="border-white">
            <p className="text-center">
              Get the ebook straight to your inbox.
            </p>
          </FormEbook>
        </Container>
      </Section>
    </>
  )
}
