import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url = "http://localhost:3000";
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
