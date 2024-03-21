import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  todoForm: any;
  selectedMonth: any;
  totalExpense: any;

  monthSelected: boolean = false;
  janTransactions: any[] = [
    { expenseType: 'Rent', amount: 5000 },
    { expenseType: 'Rent', amount: 5000 },
  ];

  febTransactions: any[] = [
    { expenseType: 'Rent', amount: 5000 },
    { expenseType: 'Rent', amount: 5000 },
  ];
  marTransactions: any[] = [
    { expenseType: 'Rent', amount: 5000 },
    { expenseType: 'Rent', amount: 5000 },
  ];
  aprTransactions: any[] = [
    { expenseType: 'Rent', amount: 5000 },
    { expenseType: 'Rent', amount: 5000 },
  ];

  mayTransactions: any[] = [
    { expenseType: 'Rent', amount: 5000 },
    { expenseType: 'Rent', amount: 5000 },
  ];

  constructor(public fb: FormBuilder, public router: Router) {
    const currenDate = new Date();
    this.selectedMonth = currenDate.toLocaleString('default', {
      month: 'long',
    });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onChange(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredIncome(this.selectedMonth);
  }

  calculateTotalExpense(month: string): number {
    this.totalExpense = 0;
    for (const expense of this.getFilteredIncome(month)) {
      this.totalExpense += expense.amount;
    }
    return this.totalExpense;
  }

  getFilteredIncome(month: string): any[] {
    let filteredTransactions: any[] = [];
    switch (month) {
      case 'January':
        filteredTransactions = [...this.janTransactions];
        break;
      case 'February':
        filteredTransactions = [...this.febTransactions];
        break;
      case 'March':
        filteredTransactions = [...this.marTransactions];
        break;
      case 'April':
        filteredTransactions = [...this.aprTransactions];
        break;
      case 'May':
        filteredTransactions = [...this.mayTransactions];
        break;
    }
    return filteredTransactions;
  }

  onBack() {
    this.router.navigate(['/money-control/dashboard']);
  }

}
