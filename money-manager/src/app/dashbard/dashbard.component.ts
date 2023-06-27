import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.scss'],
})
export class DashbardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onNavigateToExpenses() {
    this.router.navigate(['expenses'], { relativeTo: this.route });
  }

  onNavigateToIncomes() {
    this.router.navigate(['incomes'], { relativeTo: this.route });
  }
}
