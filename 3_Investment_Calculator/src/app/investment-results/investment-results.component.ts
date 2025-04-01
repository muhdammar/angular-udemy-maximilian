import { Component, computed, inject} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
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

  //1st way
  results = computed(() => this.InvestmentService.resultData())//signal way

//2nd way
// results = this.InvestmentService.resultData.asReadonly();//signal way
   
}
