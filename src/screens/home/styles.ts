import { styled } from 'styled-components';

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem;

> div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
`;

export const Main = styled.main`
display: flex;
gap: 0.75rem;
width: 100%;
padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Secyion = styled.section`
display: flex;
flex-direction: column;
gap: 0.75rem;
width: 100%;
`;
export const Filters = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;
export const InputGroup = styled.div`
display: flex;
align-items: flex-end;
max-width: 22.5rem;
width: 100%;
gap: 0.5rem;
`;
