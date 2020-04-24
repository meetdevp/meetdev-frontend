import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalFunctions } from '../common/functions/modal-functions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  invalidConfirmPassword :boolean = false;
  formSubmitted : boolean= false;
  form = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('',[
      Validators.required
    ])
  })

  constructor(private auth: AuthService, public modal : ModalFunctions) { }

  ngOnInit(): void {

  }

  submit(){
    this.formSubmitted = true;
    console.log("submit form");
    if(this.form.invalid){
      return;
    }
    
    if(this.form.get('Password').value !== this.form.get('confirmpassword').value){
      console.log('password not matched');
      this.invalidConfirmPassword = true;
    }
    else{
      this.invalidConfirmPassword = false;
      //console.log('formsubmitted',this.form.value);
      this.auth.signup(this.form.value)
      .subscribe(response => {
        
        //this.student_id = response['Student']._id;
        if(response['msg'] === "Sign Up Successfully"){
          console.log("signup successful", response);
          this.modal.openModal('#successModal');
        }
        else if(response['msg'] === "Email Already Exist"){
          console.log("signup failed", response);
          this.modal.openModal('#mailExists');
        }
      })
    }

  
    this.formSubmitted = false;

  }
}
