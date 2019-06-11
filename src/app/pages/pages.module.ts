import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    HomeComponent,
    TeamComponent,
  ],
  exports: [
    HomeComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }