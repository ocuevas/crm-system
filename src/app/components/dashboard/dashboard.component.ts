import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  returnUrl: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    
  }

  ngOnInit() {
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }
  
  logout() {
      localStorage.removeItem('token');
       this.router.navigate([this.returnUrl]);
    
  }
}
