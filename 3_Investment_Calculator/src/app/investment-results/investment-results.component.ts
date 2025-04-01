import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { InvestmentService } from '../investment.service';

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
  private InvestmentService = inject(InvestmentService);

  get results() {
    return this.InvestmentService.resultData;
  }
}
