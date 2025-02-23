import type { ComponentProps } from 'react';
import { Container } from './styles';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: 'black' | 'dark';
};

export function Input({ label, variant = 'black', ...props }: InputProps) {
  return (
    <Container $variant={variant}>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      {label && <label>{label}</label>}
      <input {...props} />
    </Container>
  );
}
