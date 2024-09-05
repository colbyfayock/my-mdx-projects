interface AsideProps extends React.ComponentProps<'aside'> {}

const Aside = ({ children, className, ...props }: AsideProps) => {
  return (
    <aside className="w-full xl:w-sidebar" {...props}>
      { children }
    </aside>
  )
}