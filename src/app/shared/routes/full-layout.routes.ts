import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'latest',
    loadChildren: () => import('../../latest/latest.module').then(m => m.LatestModule)
  },
  {
    path: 'joinus',
    loadChildren: () => import('../../joinus/joinus.module').then(m => m.JoinusModule)
  },
  {
    path: 'guidesnmethods',
    loadChildren: () => import('../../guidesnmethods/guidesnmethods.module').then(m => m.GuidesnmethodsModule)
  },
  {
    path: 'freebies',
    loadChildren: () => import('../../freebies/freebies.module').then(m => m.FreebiesModule)
  },
  {
    path: 'bins',
    loadChildren: () => import('../../bins/bins.module').then(m => m.BinsModule)
  }
];
