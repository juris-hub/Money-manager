import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Categories } from 'src/app/shared/categories';

@Component({
  standalone: true,
  imports: [
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
export class CreateExpenseFormComponent implements OnChanges {
  @Input() values: any;
  accounts = ['Visa account', 'Diners account'];
  categories = Categories;

  expensesForm = this.fb.group({
    amount: '',
    account: '',
    categories: '',
    date: new Date(),
    comment: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['values'].currentValue) {
      this.expensesForm.patchValue(changes['values'].currentValue);
    }
  }
  ngOnInit(): void {}
}
