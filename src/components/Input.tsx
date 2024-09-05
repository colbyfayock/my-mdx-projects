import { cn } from '@/lib/util';

interface InputProps extends React.ComponentProps<'input'> {}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn('block w-full text-zinc-600 text-xl text-center px-4 py-3 border-[3px] border-zinc-200 rounded-md focus:outline-none focus:border-blue-400', className)}
      {...props}
    />
  )
}

export default Input;