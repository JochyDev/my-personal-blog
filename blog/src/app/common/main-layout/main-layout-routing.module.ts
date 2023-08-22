import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../frontend/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../../frontend/about-me/about-me.module').then(m => m.AboutMeModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../../frontend/post/post.module').then(m => m.PostModule)
      },
      {
        path: 'timeline',
        loadChildren: () => import('../../frontend/timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
