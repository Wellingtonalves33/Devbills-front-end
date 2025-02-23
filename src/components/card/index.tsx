import {
  ArrowCircleDownRight,
  ArrowCircleUpRight,
} from '@phosphor-icons/react';
import { CurrencyCircleDollar } from '@phosphor-icons/react/dist/ssr';
import { formatCurrency } from '../../utils/format-currency';
import { Container } from './styles';

type CartProps = {
  vartiant?: 'balance' | 'incomes' | 'expenses';
  title: string;
  amount: string;
};

const iconsMap = {
  balance: <CurrencyCircleDollar />,
  incomes: <ArrowCircleUpRight />,
  expenses: <ArrowCircleDownRight />,
};

export function Card({ vartiant = 'balance', title, amount }: CartProps) {
  return (
    <Container $variant={vartiant}>
      {iconsMap[vartiant]}
      <span>{title}</span>
      <strong>{formatCurrency(Number(amount))}</strong>
    </Container>
  );
}
