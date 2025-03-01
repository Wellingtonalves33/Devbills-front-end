import { css, styled } from 'styled-components';
import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'default' | 'outline';
};

export const Container = styled.button<ContainerProps>`
display: flex;
align-items: center;
justify-content: center;
height: 2.25rem;
border-radius: 0.25rem;
background-color: ${(props) => (props.$variant === 'default' ? theme.colors.primary : 'transparent')};
color: ${(props) => (props.$variant === 'default' ? theme.colors.black : theme.colors.primary)};
border: 0;
padding: 0 0.75rem;
transition: all 100ms ease-in-out;

${({ $variant }) =>
  $variant === 'outline' &&
  css`
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
`}

&:hover {
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
}
&:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
}
`;
