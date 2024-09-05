import { MDXRemote } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectContent from '@/components/ProjectContent';
import ProjectSidebar from '@/components/ProjectSidebar';
import Checklist from '@/components/Checklist';
import LoginRequired from '@/components/LoginRequired';

export default async function ProjectPage({ params }: { params: { projectSlug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'src/projects', `${params.projectSlug}.mdx`), 'utf-8');
  return (
    <div>  
      <MDXRemote
        source={content}
        components={{
          ProjectHeader,
          ProjectContent,
          ProjectSidebar,
          Checklist,
          LoginRequired,
        }}
      />
    </div>
  )
}

