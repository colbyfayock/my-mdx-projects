import { cn } from '@/lib/util';

interface ArticleProps extends React.ComponentProps<"article"> {
  withSidebar?: boolean;
}

const Article = ({ children, className, withSidebar = true }: ArticleProps) => {
  return (
    <article
      className={cn(
        'mb-18',
        withSidebar && `lg:w-content-with-sidebar lg:pr-20`,
        className
      )}
      data-with-sidebar={withSidebar}
    >
      { children }
    </article>
  )
}

export default Article;
