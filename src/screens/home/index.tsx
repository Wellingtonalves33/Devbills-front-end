import { InputMask } from '@react-input/mask';
import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import {
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  Secyion,
} from './styles';

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
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
              />

              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} vartiant="incomes" />
            <Card title="Saldo" amount={1000000} vartiant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no periodo"
              />
            </header>
            <ChartContent> </ChartContent>
          </ChartContainer>

          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Despesas por categoria no periodo"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent> </ChartContent>
          </ChartContainer>
        </Secyion>
      </Main>
    </>
  );
}
