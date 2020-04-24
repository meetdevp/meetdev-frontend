import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  formSubmitted = false;
  checkedtags = [];
  technologies = [
    {
      id: 'machine_learning',
      name: 'Machine Learning',
    },
    {
      id: 'data_analytics',
      name: 'Data Analytics',
    },
    {
      id: 'app_development',
      name: 'App Development',
    },
    {
      id: 'frontend',
      name: 'FrontEnd Development',
    },
    {
      id: 'backend',
      name: 'Backend Development',
    },
  ];
  
  form = new FormGroup({
    Title: new FormControl('',Validators.required),
    Discription: new FormControl('',Validators.required),
    ProjectTechnologies: new FormControl('',Validators.required)
  })

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
   
  }

  addTechnology(option, event) {
    if(event.target.checked) {
      this.checkedtags.push(option.name);
    } 
    else {
    for(var i=0 ; i < this.technologies.length; i++) {
      if(this.checkedtags[i] == option.name) {
        this.checkedtags.splice(i,1);
     }
   }
 }
}

submit() {
  this.formSubmitted = true;
  console.log(this.checkedtags);
  this.form.value.ProjectTechnologies = this.checkedtags;
  console.log(this.form.value);
  if (this.form.invalid) {
    return;
  }

  this.service.addProject(this.form.value)
  .subscribe((response) => {
    console.log('project added', response);
  });
  this.formSubmitted = false;
}

}
