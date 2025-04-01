import { Component, EventEmitter, Output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>;

  // initialInvestment = '0';
  // annualInvestment = '0';
  // expectedReturn = '0';
  // duration = '0';

  //signal way

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');
  // onSubmit(){
  //   console.log('User input submitted');
  //   this.calculate.emit({
  //     initialInvestment: +this.initialInvestment,
  //     duration: +this.duration,
  //     expectedReturn: +this.expectedReturn,
  //     annualInvestment: +this.annualInvestment
  //   })
  // }

  constructor(private investmentService: InvestmentService){
  }
  //signal way
  onSubmit() {
    console.log('User input submitted');
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment()
    })

    // Reset values after submit
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}
