import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  incomeForm: any;
  selectedMonth: any;

  monthSelected: boolean =false;
  janIncomes: any []  = [
    { source: "Salary", amount: 5000,investments: 40000},
    { source: "Salary", amount: 5000,investments: 40000},
  ];

  febIncomes: any []  = [
    { source: "Salary", amount: 5000,investments: 40000},
    { source: "Salary", amount: 5000,investments: 40000},
  ];
  marIncomes: any []  = [
    { source: "Salary", amount: 5000,investments: 40000},
    { source: "Salary", amount: 5000,investments: 40000},
  ];
  aprIncomes: any []  = [
    { source: "Salary", amount: 5000,investments: 40000},
    { source: "Salary", amount: 5000,investments: 40000},
  ];

  mayIncomes: any []  = [
    { source: "Salary", amount: 5000,investments: 40000},
    { source: "Salary", amount: 5000,investments: 40000},
  ];

  constructor(public fb:FormBuilder, public router: Router) {
    const currenDate = new Date();
    this.selectedMonth = currenDate.toLocaleString('default', {month: 'long'});
   }

  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['',Validators.required],
      investments: ['',Validators.required]
    })
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncome(this.selectedMonth);
  }

  calculateTotalIncome(month:string):number {
    let totalIncome = 0;
    for (const income of this.getFilteredIncome(month)){
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getFilteredIncome(month: string):any[]{
    let filteredIncomes: any [] =[];
    switch(month){
      case 'January':
        filteredIncomes = [...this.janIncomes];
        break;
      case 'February':
        filteredIncomes = [...this.febIncomes];
        break;
      case 'March':
        filteredIncomes = [...this.marIncomes];
        break;
      case 'April':
        filteredIncomes = [...this.aprIncomes];
        break;
      case 'May':
        filteredIncomes = [...this.mayIncomes];
        break;
    }
    return filteredIncomes;
  }

  onSubmit() {

    if(this.incomeForm.valid){
      const newIncome = this.incomeForm.value;
      switch(this.selectedMonth){
        case 'January':
          this.janIncomes.push(newIncome);
          break;
        case 'February':
          this.febIncomes.push(newIncome);
          break;
        case 'March':
          this.marIncomes.push(newIncome);
          break;
        case 'April':
          this.aprIncomes.push(newIncome);
          break;
        case 'May':
          this.mayIncomes.push(newIncome);
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({month: '', source: '', amount: '', investments: ''});
    }

  }

  saveForm(){
    console.log("Form Saved");
  }

  onBack(){
    this.router.navigate(['/money-control/dashboard'])
  }

}
