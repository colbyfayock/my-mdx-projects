import { cn } from '@/lib/util';

interface SectionProps extends React.ComponentProps<'div'> {
  backgroundColor?: string;
  spacing?: string;
}

const Section = ({ children, className, backgroundColor, spacing, ...rest }: SectionProps) => {
  return (
    <div 
      {...rest}
      className={cn(
        'py-24 md:py-36',
        spacing === 'compact' && 'py-14 md:py-20',
        backgroundColor === 'blue' && 'text-white bg-brand-blue-medium',
        backgroundColor === 'blue-dark' && 'text-white bg-brand-blue-dark',
        backgroundColor === 'purple' && 'text-white bg-brand-purple',
        className
      )}
    >
      { children }
    </div>
  )
}

export default Section;