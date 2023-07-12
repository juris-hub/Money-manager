import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Expense } from '../shared/expense.model';
import { HttpClient } from '@angular/common/http';
import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          let expensesArray: Array<Expense> = new Array<Expense>();
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              expensesArray.push({ ...response[key], id: key });
            }
          }
          return expensesArray;
        })
      );
  }

  getTodayExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          let startDate = startOfToday().toDateString();
          let expensesArray: Array<Expense> = new Array<Expense>();
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              new Date(response[key].date).toDateString() === startDate
                ? expensesArray.push({ ...response[key], id: key })
                : [];
            }
          }
          return expensesArray;
        })
      );
  }

  getWeekExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          let expensesArray: Array<Expense> = new Array<Expense>();
          for (const key in response) {
            let responseDate = +new Date(response[key].date);
            let startDate = +new Date(
              startOfWeek(Date.now(), { weekStartsOn: 1 })
            );
            let endDate = +new Date(endOfWeek(Date.now(), { weekStartsOn: 1 }));
            if (response.hasOwnProperty(key)) {
              startDate <= responseDate && responseDate <= endDate
                ? expensesArray.push({ ...response[key], id: key })
                : [];
            }
          }
          return expensesArray;
        })
      );
  }

  getMonthExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          let expensesArray: Array<Expense> = new Array<Expense>();
          for (const key in response) {
            let responseDate = +new Date(response[key].date);
            let startDate = +new Date(startOfMonth(Date.now()));
            let endDate = +new Date(endOfMonth(Date.now()));
            if (response.hasOwnProperty(key)) {
              startDate <= responseDate && responseDate <= endDate
                ? expensesArray.push({ ...response[key], id: key })
                : [];
            }
          }
          return expensesArray;
        })
      );
  }

  createAndStoreExpense(expense: Expense) {
    this.http.post<Expense>(
      'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
      expense
    );
  }

  getExpense(id: string) {
    return this.http.get<Expense>(
      `https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`
    );
  }

  updateExpense(id: string, expense: Object) {
    return this.http.put<Expense>(
      `https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`,
      expense
    );
  }

  deleteExpense(id: string) {
    return this.http.delete(
      `https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`
    );
  }
}
