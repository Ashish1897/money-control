import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  isToggle = true;

  toggle(){
    this.isToggle = !this.isToggle;
  }

  onDash(){
    this.router.navigate(['/money-control/dashboard']);
  }

  onHistory(){
    this.router.navigate(['/money-control/history']);
  }

  onProfile(){
    this.router.navigate(['/money-control/profile']);
  }

  logout(){
    this.router.navigate(['/money-control/login']);
  }

}
