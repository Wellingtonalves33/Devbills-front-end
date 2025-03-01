import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

const apiData = [
  {
    _id: {
      year: 2023,
      month: 1,
    },
    balance: 68900,
    incomes: 50000,
    expenses: 18900,
  },
  {
    _id: {
      year: 2023,
      month: 2,
    },
    balance: 68900,
    incomes: 50000,
    expenses: 18900,
  },
  {
    _id: {
      year: 2023,
      month: 3,
    },
    balance: 68900,
    incomes: 50000,
    expenses: 18900,
  },
  {
    _id: {
      year: 2023,
      month: 4,
    },
    balance: 68900,
    incomes: 50000,
    expenses: 18900,
  },
];

type ChartData = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

export function FinancialEvolutionBarChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
      Saldo: item.balance,
      Receitas: item.incomes,
      Gastos: item.expenses,
    }));

    return chartData;
  }, []);
  return (
    <ResponsiveBar
      data={data}
      keys={['Saldo', 'Receitas', 'Gastos']}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      indexBy="month"
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 5,
        format: formatCurrency,
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        axis: {
          ticks: {
            text: {
              fill: theme.colors.neutral,
            },
          },
        },
        tooltip: {
          container: {
            background: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 10,
            borderRadius: 4,
          },
        },
      }}
      valueFormat={formatCurrency}
    />
  );
}
