import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../admin/adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  id:any;

  constructor(private admin_service=AdminserviceService, private rou-ter:Router) { }



  ngOnInit(): void {
    this.form= new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
    login{}{
      console.log(this.form.value)
      if (this.form.valid) {
        this.admin_service.user_login(this.form.value).subscribe(
          res => {
            console.log(res);

            this.form.reset();
            this.router.navigate(["/admin-dashboard"]);
          })
      }



    }



    
  }

}
