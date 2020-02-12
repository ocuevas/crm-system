import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;
  returnUrl: string;
  authenticationService: any;
  

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ServicesService
  ) {
   
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };
    this.apiService.login(loginData).subscribe(data => {
      
      if(data.token) {
        window.localStorage.setItem('token', data.token);
        this.router.navigate([this.returnUrl]);
      }
    });
  }


}
