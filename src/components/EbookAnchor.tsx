import Section from '@/components/Section';
import Container from '@/components/Container';
import FormEbook from '@/components/FormEbook';

const EbookAnchor = () => {
  return (
    <Section className="text-center" spacing="compact">
      <Container>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-12">Start Doing Now</h2>

        <p className="text-xl sm:text-2xl md:text-4xl my-6 mb-8">
          Get all projects as an ebook right to your inbox for <strong>FREE</strong>!
        </p>

        <FormEbook id="footer" />
      </Container>
    </Section>
  )
}

export default EbookAnchor;