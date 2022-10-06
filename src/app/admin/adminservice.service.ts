import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url="http://localhost:3000/"


  constructor(private http : HttpClient) {}
  getdata(){
    return this.http.get(this.url+'blogs')
  }
  adddata(add_data_var:any){
    return this.http.get(this.url+'blogs',add_data_var)
  }
  view_blog(id:any){
    return this.http.get(this.url+'blogs/'+id)
  }

}
