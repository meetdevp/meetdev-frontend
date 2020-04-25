import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url = "https://minor-backend.herokuapp.com";
  constructor(private http:HttpClient) { 
  }

  getStudent(id){
    //console.log(data);
    return this.http.post(`${this.url}/get-student-byId`,id)
  }
  getAllStudents(){
    return this.http.get(`${this.url}/get-students`);
  }
}
