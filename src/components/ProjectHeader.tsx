interface ProjectHeaderProps extends React.ComponentProps<'div'> {}

const ProjectHeader = ({ children, ...rest }: ProjectHeaderProps) => {
  return (
    <div
      className={`
        w-full mb-10 md:mb-16
        [&_h1]:text-4xl sm:[&_h1]:text-5xl md:[&_h1]:text-6xl [&_h1]:font-bold [&_h1]:m-0 [&_h1]:mb-4
        [&_p]:text-xl [&_p]:sm:text-2xl [&_p]:md:text-3xl [&_p]:line-height-1.3
      `}
      {...rest}
    >
      { children }
    </div>
  )
}

export default ProjectHeader;