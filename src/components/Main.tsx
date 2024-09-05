interface MainProps extends React.ComponentProps<"main"> {}

const Main = ({ children, ...rest }: MainProps) => {
  return (
    <main className="border-t-[20px] border-brand-purple" {...rest}>
      { children }
    </main>
  )
}

export default Main;