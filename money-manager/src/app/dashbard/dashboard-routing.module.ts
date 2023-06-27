import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExpenseComponent } from './pages/create-expense/create-expense.component';
import { CreateIncomeComponent } from './pages/create-income/create-income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { IncomesComponent } from './components/incomes/incomes.component';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashbard.component').then((c) => c.DashbardComponent),
    children: [
      { path: 'expenses', component: ExpensesComponent },
      { path: 'incomes', component: IncomesComponent },
    ],
  },

  {
    path: 'create-expense',
    component: CreateExpenseComponent,
  },
  {
    path: 'create-income',
    component: CreateIncomeComponent,
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class DashboardRoutingModule {}
