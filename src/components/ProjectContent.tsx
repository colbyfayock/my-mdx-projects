interface ProjectContentProps extends React.ComponentProps<"div"> {}

const ProjectContent = ({ children, ...props }: ProjectContentProps) => {
  return (
    <div
      {...props}
      className={`
        lg:w-content-with-sidebar lg:pr-12 mb-12
        [&_h2]:text-white [&_h2]:bg-brand-purple
        [&_p]:text-lg md:[&_p]:text-xl md:[&_p]:leading-8 [&_p]:px-2 [&_p]:my-3
      `}
    >
      { children }
    </div>
  )
}

export default ProjectContent;