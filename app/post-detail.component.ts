import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Post } from './post'
import { PostService } from './post.service'

@Component({
    selector: 'post-detail',
    templateUrl: 'app/post-detail.component.html',
    styleUrls: ['app/post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {

  post: Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.route.params.forEach(params => {
      let id = +params['id']
      this.postService.getPost(id).then(post => this.post = post)
    })
  }

}
