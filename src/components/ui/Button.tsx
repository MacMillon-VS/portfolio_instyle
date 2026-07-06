import { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'ghost';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  withArrow?: boolean;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 ease-luxe focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ink';

const variants: Record<Variant, string> = {
  solid: 'bg-bronze text-ink hover:bg-bronze-light',
  outline: 'border border-ivory/25 text-ivory hover:border-bronze hover:text-bronze',
  ghost: 'text-ivory/80 hover:text-bronze',
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ variant = 'solid', withArrow = true, className = '', children, ...props }, ref) => (
    <a ref={ref} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </a>
  )
);

Button.displayName = 'Button';
export default Button;
