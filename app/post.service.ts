import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'

import { Post } from './post'
import { Injectable } from '@angular/core'

@Injectable()
export class PostService {

  private readonly apiBase = 'http://localhost:4000'
  private readonly headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPosts(): Promise<Post[]> {
    const url = `${this.apiBase}/api/posts`
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Post[])
      .catch(this.handleError)
  }

  getPost(id: number): Promise<Post> {
    const url = `${this.apiBase}/api/posts/${id}`
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data as Post)
      .catch(this.handleError)
  }

  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error) // for demo purposes only
    return Promise.reject(error.message || error)
  }
}
