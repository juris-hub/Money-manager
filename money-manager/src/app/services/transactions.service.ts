import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
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
      .subscribe();
  }

  getExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          const expensesArray = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              expensesArray.push({ ...response[key], id: key });
            }
          }
          return expensesArray;
        })
      );
  }

  deleteExpense(id: string) {
    return this.http.delete(
      `https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`
    );
  }
}
