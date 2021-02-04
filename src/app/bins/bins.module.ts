import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinsComponent } from './bins.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BinsComponent,
    data: {
      title: 'Page'
    }
  }
];

@NgModule({
  declarations: [BinsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BinsModule { }
