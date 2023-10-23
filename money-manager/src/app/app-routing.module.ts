import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomesComponent } from './expenses/components/incomes/incomes.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenses', pathMatch: 'full' },

  {
    path: 'expenses',
    loadChildren: () =>
      import('./expenses/expenses.routes').then((m) => m.EXPENSE_ROUTES),
  },
  { path: 'incomes', component: IncomesComponent },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.routes').then((m) => m.ACCOUNT_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
