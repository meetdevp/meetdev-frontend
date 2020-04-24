import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalFunctions } from '../common/functions/modal-functions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
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
    Phone: new FormControl('', Validators.required),
    Department: new FormControl('', Validators.required),
    Batch: new FormControl('', Validators.required),
    Bio: new FormControl('', Validators.required),
    Technologies: new FormControl('', Validators.required),
  });

  constructor(private auth: AuthService,public modal:ModalFunctions) {}
  ngOnInit(): void {
    
  }


  addTechnology(option, event) {
    if(event.target.checked) {
      this.checkedtags.push(option.name);

    } else {
    for(var i=0 ; i < this.technologies.length; i++) {
      if(this.checkedtags[i] == option.name) {
        this.checkedtags.splice(i,1);
     }
   }
 }
 if(this.checkedtags.length>0) this.form.value.Technologies=this.checkedtags;
 else this.form.value.Technologies=null;
 console.log(this.form.value.Technologies);
}


  submit() {
    this.formSubmitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.auth.register(this.form.value).subscribe((response) => {
      if(response['msg']=="detailes added successfully"){
        console.log('registration successful', response);
        this.modal.openModal('#profileModal');
      }
      else if(response['msg']=="details addition failed"){
        console.log('registration failed', response);
        this.modal.openModal('#errorModal');
      }
     
    });

    this.formSubmitted = false;
  }
}
