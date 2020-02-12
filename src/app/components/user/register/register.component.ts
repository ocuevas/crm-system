import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ServicesService
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
   }

  ngOnInit() {
  }

  onSubmit() {
      const userData = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password
      }
      this.apiService.register(userData).subscribe(data => {
        if(data.message) {
          this.router.navigate([this.returnUrl]);
        }
        
      })
  }
}
