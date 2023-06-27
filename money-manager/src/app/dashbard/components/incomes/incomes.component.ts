import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule],
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss'],
})
export class IncomesComponent {
  constructor(private router: Router) {}

  OnAddIncome() {
    this.router.navigate(['create-income']);
  }
}
