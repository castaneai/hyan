import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent }   from './post-list.component';
import { PostDetailComponent } from './post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
