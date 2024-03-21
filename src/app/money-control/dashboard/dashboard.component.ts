import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalCurrentMonthIncome= 3000;
  totalCurrentMonthExpense = 2000;


  CurrentMonthSavings = this.getCurrentMonthSavings();

  lastMonthsIncome = ['January: $1000', 'February: $1000', 'March: $1000',];
  currentMonthIncome = '$2000';

  lastMonthsExpense = ['January: $100', 'February: $700', 'March: $800',];
  currentMonthExpense = '$1000';

  todoTransactions = [
    { description: "Pay Credit Card Bill"},
    { description: "Pay Credit Card Bill"},
    { description: "Pay Credit Card Bill"},
    { description: "Pay Credit Card Bill"} 
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onIncome(){
    this.router.navigate(['/money-control/income']);
  }

  onTodo() {
    this.router.navigate(['/money-control/todo']);
  }
  
  onExpense() {
    this.router.navigate(['/money-control/expense']);
  }


  getCurrentMonthSavings():any{
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
