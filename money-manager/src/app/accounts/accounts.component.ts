import { Component } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { AccountsSummaryComponent } from './components/accounts-summary/accounts-summary.component';

@Component({
  standalone: true,
  imports: [SidebarComponent, AccountsSummaryComponent],
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {}
