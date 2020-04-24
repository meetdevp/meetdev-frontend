import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_id;
  formSubmitted : boolean= false;
  form = new FormGroup({
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',Validators.required)
  })

  constructor(private auth: AuthService) { }


  ngOnInit(): void {
    
  }

  submit(){
    this.formSubmitted = true;
    console.log("submit form");
    if(this.form.invalid){
      return;
    }
    
      console.log('formsubmitted',this.form.value);
      this.auth.login(this.form.value)
      .subscribe(response => {
        let isRegistered , userId, studentName;
        console.log("logging in", response);
        if(response['msg'] === 'Login Successfully'){
          console.log("Login successful");
          this.formSubmitted = false;

          //setting the user_id in localstorage
          userId = response['Student'][0]._id;
          isRegistered = response['Student'][0].IsRegistered;
          studentName = response['Student'][0].Name;
          this.auth.setDataInLocalStorage(userId,studentName);
          
          if(isRegistered == true)
          {
            this.auth.route.navigate(['/my-profile']);
            console.log(isRegistered);
          }
          else
          {
            this.auth.route.navigate(['/register']);
            console.log(isRegistered);
          }
         
        }
      })
    
  
  }
}
