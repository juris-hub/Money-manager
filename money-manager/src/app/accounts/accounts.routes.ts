import { Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    component: AccountsComponent,
  },
  { path: 'add', component: AddAccountComponent },
];
