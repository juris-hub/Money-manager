import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  standalone: true,
  imports: [DividerModule],
  selector: 'app-accounts-summary',
  templateUrl: './accounts-summary.component.html',
  styleUrls: ['./accounts-summary.component.scss'],
})
export class AccountsSummaryComponent {}
