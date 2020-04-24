import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StudentService } from './services/student.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { CommonPipesModule } from './common/pipes/common-pipes.module';
import { UserProjectComponent } from './user-project/user-project.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { FeedComponent } from './feed/feed.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfilePageComponent,
    RegistrationComponent,
    AddProjectComponent,
    UserProjectComponent,
    StudentPageComponent,
    ProjectPageComponent,
    FeedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonPipesModule,
    OwlModule
  ],
  providers: [AuthService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
