import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    DropdownModule,
    CommonModule,
    InputTextModule,
    CalendarModule,
    InputTextareaModule,
  ],
  selector: 'app-create-expense-form',
  templateUrl: './create-expense-form.component.html',
  styleUrls: ['./create-expense-form.component.scss'],
})
export class CreateExpenseFormComponent {
  //accounts need to be added then used in this dropdown
  accounts = [{ name: 'Visa account' }, { name: 'Diners account' }];
  expensesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.expensesForm = this.fb.group({
      amount: new FormControl(),
      account: new FormControl(),
      categories: new FormArray([]),
      date: new FormControl(new Date()),
      comment: new FormControl(),
    });
  }
}
