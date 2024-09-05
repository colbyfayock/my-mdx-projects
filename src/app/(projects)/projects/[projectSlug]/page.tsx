import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import ProjectSidebar from '@/components/ProjectSidebar';
import Checklist from '@/components/Checklist';
import LoginRequired from '@/components/LoginRequired';
import Container from '@/components/Container';

export default async function ProjectPage({ params }: { params: { projectSlug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'src/projects', `${params.projectSlug}.mdx`), 'utf-8');

  interface Frontmatter {
    title: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true
    },
    components: {
      ProjectHeader,
      ProjectContent,
      ProjectSidebar,
      Checklist,
      LoginRequired,
    }
  })

  return (
    <Container className="mt-10">
      {/* <h1>{ data.frontmatter.title }</h1> */}
      { data.content }
    </Container>
  )
}

