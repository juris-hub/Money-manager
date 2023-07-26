import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomesComponent } from './expenses/components/incomes/incomes.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenses', pathMatch: 'full' },

  {
    path: 'expenses',
    loadChildren: () =>
      import('./expenses/expenses-routing.module').then(
        (m) => m.ExpensesRoutingModule
      ),
  },
  { path: 'incomes', component: IncomesComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
