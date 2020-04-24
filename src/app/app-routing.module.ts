import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UserProjectComponent } from './user-project/user-project.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'my-profile',
    component: ProfilePageComponent
  },
  {
    path:'register',
    component: RegistrationComponent
  },
  {
    path:'add-project',
    component: AddProjectComponent
  },
  {
    path:'project-page/:id',
    component: UserProjectComponent
  },
  {
    path:'student/:id',
    component: StudentPageComponent
  },
  {
    path:'project/:id',
    component: ProjectPageComponent
  },
  {
    path: 'home',
    component: FeedComponent
  },
  {
      path: '**',
      redirectTo: '/signup',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
