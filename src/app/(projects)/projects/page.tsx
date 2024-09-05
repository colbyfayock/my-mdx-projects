import Section from '@/components/Section';
import Container from '@/components/Container';
import Article from '@/components/Article';

export const metadata = {
  title: 'Projects',
  description: 'Use these 50 real-world project ideas to learn by doing including building an ecommerce store and a budget manager.'
}

export default async function Projects() {
  return (
    <Section spacing="compact">
      <Container>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-10 md:mb-16">
          Projects to Start Building
        </h1>

        <Article withSidebar={false}>
          <h2 className="sr-only">Project Ideas</h2>
        </Article>
      </Container>
    </Section>
  )
}