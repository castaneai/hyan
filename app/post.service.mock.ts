import { Post } from './post'
import { PostService } from './post.service'
import { MOCK_POSTS } from './mock-posts'

export class PostServiceMock extends PostService {

  getPosts(): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      resolve(MOCK_POSTS)
    }).catch(this.handleError)
  }

  getPost(id: number): Promise<Post> {
    return this.getPosts()
    .then(posts => posts.find(p => p.id === id))
    .catch(this.handleError)
  }
}
