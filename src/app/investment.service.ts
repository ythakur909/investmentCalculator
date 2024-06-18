import { Injectable } from '@angular/core';
import { ITable, InvestmentInput } from './investment-model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultsData?: ITable[];

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, annualInvestment, expectedReturn } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData = annualData;
    console.log('res', this.resultsData);
  }
}
