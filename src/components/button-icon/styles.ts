import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 2.25rem;
width: 2.25rem;
border-radius: 0.25rem;
background-color: ${theme.colors.primary};
border: 0;
padding: 0;
transition: all 100ms;


&:hover {
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
}
svg{
    fill: ${theme.colors.black};
    height: 1.25rem;
    width: 3rem;
}
&:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
}
`;
