import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MoneyControlRoutingModule } from './money-control-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    SideNavbarComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoComponent,
    HistoryComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MoneyControlRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ]
})
export class MoneyControlModule { }
