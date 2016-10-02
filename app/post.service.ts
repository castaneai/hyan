import { Post } from './post';
import { MOCK_POSTS } from './mock-posts';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  getPosts(): Promise<Post[]> {
    return Promise.resolve(MOCK_POSTS);
  }

  getPost(id: number): Promise<Post> {
    return this.getPosts().then(posts => posts.find(p => p.id === id));
  }
}
