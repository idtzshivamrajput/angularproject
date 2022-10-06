import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  id:any;
  form:any;

  constructor( private admin_service:AdminserviceService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(''),
      description : new FormControl('')
    })
  }
  add_blog(){
    this.admin_service.adddata(this.form.value).subscribe((res)=>{
      console.log(res)
    })
  }
}
