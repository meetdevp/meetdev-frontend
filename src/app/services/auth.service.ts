import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000";

  public isLoggedIn : Boolean = false;
  public studentId: string;
  public studentName: string;

  constructor(private http:HttpClient, public route: Router) { 
    
   }


  signup(formValue){
    return  this.http.post(`${this.url}/sign-up`, formValue);
  }

  login(formValue){
    this.isLoggedIn = true;
    return  this.http.post(`${this.url}/log-in`, formValue);
  }

  register(formValue){
    let Id = this.studentId;
    const data={
      Id:Id,
      Department:formValue.Department,
      Batch:formValue.Batch,
      Phone:formValue.Phone,
      Bio:formValue.Bio,
      Technologies: formValue.Technologies
    }
    console.log(data)
    return  this.http.patch(`${this.url}/insert-details`,data);
  }

  setDataInLocalStorage(id,name){
    this.studentId = id;
    this.studentName = name;
    this.isLoggedIn = true;
    localStorage.setItem('student_id',id);
    localStorage.setItem('student_name',name);
    console.log("Data stored from LS");
    //console.log("ID stored LS", id, this.studentId);
  }

  checkLocalStorage(){
    if(localStorage.getItem('student_id')){
      this.isLoggedIn = true;
    }
   
  }

  logout(){
    this.isLoggedIn = false;
    this.studentId = null;
    localStorage.removeItem('student_id');
    localStorage.removeItem('student_name');
    console.log("Data removed from LS");
  }

}

