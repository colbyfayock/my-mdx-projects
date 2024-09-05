import { cn } from '@/lib/util';

interface ContainerProps extends React.ComponentProps<'div'> {
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('max-w-[80rem] px-6 md:px-12 mx-auto', className)}>
      { children }
    </div>
  )
}

export default Container;