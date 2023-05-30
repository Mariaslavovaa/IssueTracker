import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsIssuesComponent } from './components/projects-issues/projects-issues/projects-issues.component';
import { AllIssuesComponent } from './components/all-issues/all-issues/all-issues.component';
import { AssigneeIssuesComponent } from './components/assignee-issues/assignee-issues.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all-issues',
  },
  { path: 'all-issues', component: AllIssuesComponent },
  { path: 'assignee-issues', component: AssigneeIssuesComponent },
  { path: 'projects-issues', component: ProjectsIssuesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
