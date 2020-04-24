import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ProjectService } from '../services/project.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user;
  projects;
  user_id;
  id;
  constructor(private studentservice: StudentService, private projectservice: ProjectService, public auth: AuthService) { }
 
  ngOnInit(): void {

    this.user_id= {
      'StudentId': localStorage.getItem('student_id')
    };
    this.id = localStorage.getItem('student_id');
    
    this.studentservice.getStudent(this.user_id).
    subscribe(response => {
      this.user = response['Student'];
      console.log(this.user);
    })

    this.projectservice.getStudentsProject(this.id).subscribe(response => {
      this.projects = response['result'];
      console.log(this.projects);
    })
   
  }

}
