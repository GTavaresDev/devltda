import { cache } from "react";

import { db } from "@/db";
import type { Expense, ExpenseSummary } from "@/app/types/expenses-type";

const DEFAULT_REVENUE = 45000;

function mapExpense(expense: {
  id: number;
  titulo: string;
  descricao: string | null;
  valor: number;
  createdAt: Date;
  updatedAt: Date;
}): Expense {
  return {
    id: expense.id,
    title: expense.titulo,
    description: expense.descricao,
    amount: expense.valor,
    createdAt: expense.createdAt,
    updatedAt: expense.updatedAt,
  };
}

export const getExpenses = cache(async (): Promise<Expense[]> => {
  const expenses = await db.gastos.findMany({
    orderBy: { createdAt: "desc" },
  });

  return expenses.map(mapExpense);
});

export const getExpenseSummary = cache(
  async (): Promise<ExpenseSummary> => {
    const result = await db.gastos.aggregate({
      _count: { id: true },
      _sum: { valor: true },
    });

    const totalExpenses = result._sum.valor ?? 0;

    return {
      totalExpenses,
      totalRevenue: DEFAULT_REVENUE,
      totalProfit: DEFAULT_REVENUE - totalExpenses,
      totalCount: result._count.id,
    };
  },
);
