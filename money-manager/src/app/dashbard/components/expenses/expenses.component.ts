import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule],
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  constructor(private router: Router) {}

  OnAddExpense() {
    this.router.navigate(['create-expense']);
  }
}
