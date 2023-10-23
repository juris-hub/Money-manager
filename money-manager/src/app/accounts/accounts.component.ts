import { Component } from '@angular/core';
import { AccountsSummaryComponent } from './components/accounts-summary/accounts-summary.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [AccountsSummaryComponent, RouterOutlet],
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {}
