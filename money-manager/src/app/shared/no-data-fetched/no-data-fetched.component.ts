import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  standalone: true,
  imports: [MessagesModule],
  selector: 'app-no-data-fetched',
  templateUrl: './no-data-fetched.component.html',
  styleUrls: ['./no-data-fetched.component.scss'],
  providers: [MessageService],
})
export class NoDataFetchedComponent implements OnInit {
  messages!: Message[];

  ngOnInit(): void {
    this.messages = [
      {
        severity: 'warn',
        detail: 'No data for desired period',
      },
    ];
  }
}
