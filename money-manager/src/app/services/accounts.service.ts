import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Account } from '../shared/models/accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  http = inject(HttpClient);

  createAccount(account: Account) {
    return this.http.post<Account>(
      'https://money-manager-8f2ca-default-rtdb.europe-west1.firebasedatabase.app/accounts.json',
      account
    );
  }
}
