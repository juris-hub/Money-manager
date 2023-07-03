import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Expense } from '../shared/expense.model';
import { Income } from '../shared/income.model';
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
  periodForExpensesSubject = new Subject<string>();

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

  getTodayExpenses() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses.json'
      )
      .pipe(
        map((response) => {
          let startDate = startOfToday().toDateString();
          const expensesArray = [];
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
          const expensesArray = [];
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
          const expensesArray = [];
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

  deleteExpense(id: string) {
    return this.http.delete(
      `https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/expenses/${id}.json`
    );
  }
}
