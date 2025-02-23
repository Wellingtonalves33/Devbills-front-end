import { InputMask } from '@react-input/mask';
import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Balance, Filters, Header, InputGroup, Main, Secyion } from './styles';

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
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Inicio"
              />

              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Fim"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} vartiant="incomes" />
            <Card title="Saldo" amount={1000000} vartiant="expenses" />
          </Balance>
        </Secyion>
      </Main>
    </>
  );
}
