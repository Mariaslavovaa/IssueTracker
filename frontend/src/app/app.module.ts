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
import { IssueTicketComponent } from './components/issue-ticket/issue-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { EditWindowComponent } from './components/edit-window/edit-window/edit-window.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DropListComponent,
    NavBarComponent,
    AllIssuesComponent,
    ProjectsIssuesComponent,
    AssigneeIssuesComponent,
    IssueTicketComponent,
    EditWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    PortalModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
