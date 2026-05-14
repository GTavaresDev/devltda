export type Expense = {
  id: number;
  title: string;
  description: string | null;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ExpenseSummary = {
  totalExpenses: number;
  totalRevenue: number;
  totalProfit: number;
  totalCount: number;
};
