import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.scss']
})

export class UserProjectComponent implements OnInit {
  project_id;
  project;
  constructor(private router: ActivatedRoute, private projectservice : ProjectService) { }

  ngOnInit(): void {
    this.router.params.subscribe(result=> {
      this.project_id = result.id;
      console.log(this.project_id)

      this.projectservice.getProjectById(this.project_id).subscribe(response => {
        this.project = response['project'];
        console.log(response);
        console.log(this.project);
      })
    })

   
  }
}
