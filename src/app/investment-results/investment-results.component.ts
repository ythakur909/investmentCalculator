import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  constructor(private readonly investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultsData;
  }
}
