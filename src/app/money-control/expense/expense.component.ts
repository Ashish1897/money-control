import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenseForm: any;
  selectedMonth: any;

  monthSelected: boolean =false;
  janExpenses: any []  = [
    { expenseType: "Rent", amount: 5000},
    { expenseType: "Rent", amount: 5000},
  ];

  febExpenses: any []  = [
    { expenseType: "Rent", amount: 5000},
    { expenseType: "Rent", amount: 5000},
  ];
  marExpenses: any []  = [
    { expenseType: "Rent", amount: 5000},
    { expenseType: "Rent", amount: 5000},
  ];
  aprExpenses: any []  = [
    { expenseType: "Rent", amount: 5000},
    { expenseType: "Rent", amount: 5000},
  ];

  mayExpenses: any []  = [
    { expenseType: "Rent", amount: 5000},
    { expenseType: "Rent", amount: 5000},
  ];

  constructor(public fb:FormBuilder, public router: Router) {
    const currenDate = new Date();
    this.selectedMonth = currenDate.toLocaleString('default', {month: 'long'});
   }

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      amount: ['',Validators.required]
    })
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncome(this.selectedMonth);
  }

  calculateTotalExpense(month:string):number {
    let totalExpense = 0;
    for (const expense of this.getFilteredIncome(month)){
      totalExpense += expense.amount;
    }
    return totalExpense;
  }

  getFilteredIncome(month: string):any[]{
    let filteredExpenses: any [] =[];
    switch(month){
      case 'January':
        filteredExpenses = [...this.janExpenses];
        break;
      case 'February':
        filteredExpenses = [...this.febExpenses];
        break;
      case 'March':
        filteredExpenses = [...this.marExpenses];
        break;
      case 'April':
        filteredExpenses = [...this.aprExpenses];
        break;
      case 'May':
        filteredExpenses = [...this.mayExpenses];
        break;
    }
    return filteredExpenses;
  }

  onSubmit() {

    if(this.expenseForm.valid){
      const newIncome = this.expenseForm.value;
      switch(this.selectedMonth){
        case 'January':
          this.janExpenses.push(newIncome);
          break;
        case 'February':
          this.febExpenses.push(newIncome);
          break;
        case 'March':
          this.marExpenses.push(newIncome);
          break;
        case 'April':
          this.aprExpenses.push(newIncome);
          break;
        case 'May':
          this.mayExpenses.push(newIncome);
          break;
      }
      this.expenseForm.reset();
      this.expenseForm.patchValue({month: '', expenseType: '', amount: ''});
    }

  }

  saveForm(){
    console.log("Form Saved");
  }

  onBack(){
    this.router.navigate(['/money-control/dashboard'])
  }


}
