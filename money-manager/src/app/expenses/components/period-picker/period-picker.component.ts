import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { TabView, TabViewModule } from 'primeng/tabview';
import { Observable } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Expense } from 'src/app/shared/models/expense.model';

@Component({
  standalone: true,
  imports: [TabViewModule, CommonModule],
  selector: 'app-period-picker',
  templateUrl: './period-picker.component.html',
  styleUrls: ['./period-picker.component.scss'],
})
export class PeriodPickerComponent implements OnInit {
  @ViewChild('periodPicker', { static: true }) periodPicker!: TabView;

  @Output() tabId = new EventEmitter<string>();
  data$!: Observable<Expense[]>;

  transactionsService = inject(TransactionsService);

  ngOnInit(): void {}

  getCorrectPeriodData() {
    this.periodPicker.tabs.forEach((tab) => {
      if (tab._header === 'Day' && tab._selected === true) {
        this.tabId.emit('Day');
      }
      if (tab._header === 'Week' && tab._selected === true) {
        this.tabId.emit('Week');
      }
      if (tab._header === 'Month' && tab._selected === true) {
        this.tabId.emit('Month');
      }
    });
  }
}
