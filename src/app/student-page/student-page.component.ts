import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  student_id;
  student;
  projects;
  id;

  constructor(private router: ActivatedRoute,private studentservice: StudentService,private projectservice: ProjectService) { }

  ngOnInit(): void {
    this.router.params.subscribe(result=> {
      this.student_id = result.id;
      console.log(this.student_id);
    })

    this.id = {
      'StudentId': this.student_id
    };
    
    this.studentservice.getStudent(this.id).
    subscribe(response => {
      this.student = response['Student'];
      console.log(this.student);
    })

    this.projectservice.getStudentsProject(this.student_id).subscribe(response => {
      this.projects = response['result'];
      console.log(this.projects);
    })
  }

}
