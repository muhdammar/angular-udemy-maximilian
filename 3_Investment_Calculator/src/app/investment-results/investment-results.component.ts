import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input() //signal way
  // @Input() results?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]; 

  //signal way
  results = input<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[]>();
}
