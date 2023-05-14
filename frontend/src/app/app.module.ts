import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropListComponent } from './components/drop-list/drop-list/drop-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { AllIssuesComponent } from './components/all-issues/all-issues/all-issues.component';
import { ProjectsIssuesComponent } from './components/projects-issues/projects-issues/projects-issues.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AssigneeIssuesComponent } from './components/assignee-issues/assignee-issues.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DropListComponent,
    NavBarComponent,
    AllIssuesComponent,
    ProjectsIssuesComponent,
    AssigneeIssuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
