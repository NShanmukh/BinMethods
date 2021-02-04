import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuidesnmethodsComponent } from './guidesnmethods.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GuidesnmethodsComponent,
    data: {
      title: 'Page'
    }
  }
];

@NgModule({
  declarations: [GuidesnmethodsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GuidesnmethodsModule { }
