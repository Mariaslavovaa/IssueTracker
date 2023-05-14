import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsIssuesComponent } from './components/projects-issues/projects-issues/projects-issues.component';
import { AllIssuesComponent } from './components/all-issues/all-issues/all-issues.component';
import { AssigneeIssuesComponent } from './components/assignee-issues/assignee-issues.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all-issues',
  },
  { path: 'all-issues', component: AllIssuesComponent },
  { path: 'assignee-issues', component: AssigneeIssuesComponent },
  { path: 'projects-issues', component: ProjectsIssuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
