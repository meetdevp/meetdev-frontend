import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ProjectService } from '../services/project.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  students;
  projects;
  studentName;
  constructor(private studentservice: StudentService, private projectservice: ProjectService, public auth: AuthService) { }
  
  profileCarousel = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
        stagePadding: 50
      },
     1000: {
        items: 4,
      }
    }
  }

  ngOnInit(): void {
    this.getAllStudents();
    this.getAllProjects();
    this.studentName = localStorage.getItem('student_name');
     console.log(this.studentName);
  }

  getAllStudents(){
    this.studentservice.getAllStudents()
    .subscribe(response => {
      this.students = response['result'];
      console.log(this.students);
      this.students = this.students.slice(0,8);
      this.students.forEach( el => {
        if(el.Technologies.length)
        {
          el.technologyToShow = el.Technologies.slice(0,2);
         // el.remainingTechNumber = el.Technologies.length - 2;
        }
      })
    })
  }

  getAllProjects(){
    this.projectservice.getAllProjects()
    .subscribe(response => {
      this.projects = response['result'];
      this.projects.forEach( el => {
        if(el.ProjectTechnologies.length)
        {
          el.technologyToShow = el.ProjectTechnologies.slice(0,2);
        }
      })
      console.log(this.projects);
    })
  }

}
