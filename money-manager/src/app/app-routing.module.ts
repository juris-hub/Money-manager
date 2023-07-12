import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncomesComponent } from './expenses/components/incomes/incomes.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  {
    path: 'expenses',
    loadChildren: () =>
      import('./expenses/expenses-routing.module').then(
        (m) => m.ExpensesRoutingModule
      ),
  },
  { path: 'incomes', component: IncomesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
