import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { CreateExpenseComponent } from './pages/create-expense/create-expense.component';
import { EditExpenseComponent } from './pages/edit-expense/edit-expense.component';

export const EXPENSE_ROUTES: Routes = [
  {
    path: '',
    component: ExpensesComponent,
  },
  { path: 'add', component: CreateExpenseComponent },
  { path: ':id/edit', component: EditExpenseComponent },
];
