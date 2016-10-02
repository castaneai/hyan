import { Component, OnInit } from '@angular/core';
import { Post } from './post'
import { PostService } from './post.service'

@Component({
    selector: 'post-list',
    templateUrl: 'app/post-list.component.html',
})
export class PostListComponent implements OnInit {

  posts: Post[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().then(posts => this.posts = posts)
  }
}
