import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Expense } from '../shared/expense.model';
import { Income } from '../shared/income.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  transactionModeSubject = new Subject<Expense | Income>();

  constructor(private http: HttpClient) {}

  createAndStoreExpense(expense: Expense) {
    this.http
      .post<Expense>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
        expense
      )
      .subscribe(console.log);
  }
}
