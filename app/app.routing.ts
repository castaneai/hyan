import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent }   from './post-list.component';
import { PostDetailComponent } from './post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full',
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
