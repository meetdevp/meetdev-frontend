import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  project_id;
  project;
  owner;
  owner_id;
  student_id;
  showRequestBtn=true;
  Liked = false;
  requestsId = [];
  constructor(private router: ActivatedRoute, private projectservice : ProjectService , private studentservice: StudentService) { }

  ngOnInit(): void {
    this.router.params.subscribe(result=> {
      this.project_id = result.id;
      console.log(this.project_id)
    })

    this.student_id = localStorage.getItem('user_id');

    this.projectservice.getStudentsProjectById(this.project_id).subscribe(response => {
      this.project = response['result'];
      console.log("Project",this.project);

        //get the student id to whom the project belong
      this.owner_id = {
        'StudentId': this.project.StudentId
      }; 

     // this.getRequestIDs();

      //get the student details to whom the project belong
      this.studentservice.getStudent(this.owner_id).
      subscribe(response => {
        this.owner = response['Student'];
        console.log(response['Student']);
      })
    })
  }

  sendCollabRequest(){
    console.log('send collab request');
    this.projectservice.sendCollabRequest(this.project_id,this.student_id)
    .subscribe(response => {
      console.log(response);
      this.showRequestBtn = false;
      console.log(this.owner,this.project);
    })

  }

  cancelCollabRequest(){
    console.log('cancel collab request');
    this.projectservice.cancelCollabRequest(this.project_id,this.student_id)
    .subscribe(response => {
      console.log(response);
      this.showRequestBtn = true;
      console.log(this.owner,this.project);
    })
  }

  likeProject(){
    console.log("like project");
    this.projectservice.likeProject(this.project_id,this.student_id)
    .subscribe(response => {
      console.log(response);
      this.Liked = true;
      console.log(this.owner,this.project);
    })
   
  }

  unlikeProject(){
    console.log("unlike project");
    this.projectservice.unlikeProject(this.project_id,this.student_id)
    .subscribe(response => {
      console.log(response);
      this.Liked = false;
      console.log(this.owner,this.project);
    })
  }

  getRequestIDs(){
    let ids = this.project.Request;
    console.log(ids);
    for(let i =0; i< this.project.Requests.length; i++){
      this.requestsId.push(this.project.Requests[i].StudentId);
     }
    // this.project.Requests.forEach(el => {
    //   this.requestsId.push(el.StudentId);
    // });
  }
     

}

