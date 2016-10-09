import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component'
import { GlobalMenuComponent } from './global-menu.component'
import { PostListComponent } from './post-list.component'
import { PostComponent } from './post.component'
import { PostDetailComponent } from './post-detail.component'
import { PostService } from './post.service'
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    GlobalMenuComponent,
    PostListComponent,
    PostComponent,
    PostDetailComponent,
  ],
  providers: [
    PostService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
