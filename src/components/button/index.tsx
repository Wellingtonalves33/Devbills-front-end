import { type ComponentProps, forwardRef } from 'react';
import { Container } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', ...props }, ref) => (
    <Container {...props} ref={ref} $variant={variant}>
      {' '}
      {children}
    </Container>
  ),
);
