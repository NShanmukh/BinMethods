import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreebiesComponent } from './freebies.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FreebiesComponent,
    data: {
      title: 'Page'
    }
  }
];

@NgModule({
  declarations: [FreebiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FreebiesModule { }
