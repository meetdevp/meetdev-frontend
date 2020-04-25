import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = "https://minor-backend.herokuapp.com";
  constructor(private http:HttpClient) { }

  
  addProject(value){
    const data= {
      StudentId: localStorage.getItem('user_id'),
      Title: value.Title,
      Discription: value.Discription,
      ProjectTechnologies: value.ProjectTechnologies
    }
    return this.http.post(`${this.url}/add-project`,data);
  }
  //GETpROJECT 
  
  getStudentsProject(id) {
    return this.http.post(`${this.url}/get-project-byStudentId/`,id); 
  }

  getProjectById(id) {
    return this.http.get(`${this.url}/get-projectById/`+id); 
  }

  getAllProjects(){
    return this.http.get(`${this.url}/get-projects/`); 
  }

  sendCollabRequest(project_id,sender_id){
    const data = {
      'SenderId': sender_id,
      'ProjectId':project_id
    }
    return this.http.patch(`${this.url}/send-request/`,data); 
  }

  cancelCollabRequest(project_id,sender_id){
    const data = {
      'SenderId': sender_id,
      'ProjectId':project_id
    }
    return this.http.patch(`${this.url}/cancel-request/`,data); 
  }

  likeProject(project_id,student_id){
    const data = {
      'StudentId':student_id,
      'ProjectId':project_id
    }
    return this.http.patch(`${this.url}/like-project/`,data); 
  }

  unlikeProject(project_id,student_id){
    const data = {
      'StudentId':student_id,
      'ProjectId':project_id
    }
    return this.http.patch(`${this.url}/unlike-project/`,data); 
  }

}
