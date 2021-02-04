import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinusComponent } from './joinus.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JoinusComponent,
    data: {
      title: 'Page'
    }
  }
];

@NgModule({
  declarations: [JoinusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JoinusModule { }
