import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Filters, Header, Main, Secyion } from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button variant="outline">Nova transação</Button>
          <Button variant="outline">Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Secyion>
          <Filters>
            <Title title="Saldo" subtitle="Receita e despesas no periodo" />
          </Filters>
        </Secyion>
      </Main>
    </>
  );
}
