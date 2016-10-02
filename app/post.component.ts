import { Component, Input } from '@angular/core';
import { Post } from './post'

@Component({
    selector: 'post',
    templateUrl: 'app/post.component.html',
})
export class PostComponent {
  @Input() post: Post
}
