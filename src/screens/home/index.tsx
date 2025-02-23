import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { Header } from './styles';

export function Home() {
  return (
    <Header>
      <Logo />
      <div>
        <Button variant="outline">Nova transação</Button>
        <Button variant="outline">Nova categoria</Button>
      </div>
    </Header>
  );
}
