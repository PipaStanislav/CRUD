import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable ()

export class PostsService {

  constructor (
    private http: HttpClient
  ){}

  getPosts() {
    return this.http.get('/api/posts')
  }
  getOnePost(id: string) {
    return this.http.get('/api/posts/' + id)
  }
  postPost(body) {
    this.http.post('/api/posts', body)
      .subscribe(res => {console.log(res);
    })
  }
  deleteOnePost(id: string) {
    return this.http.delete('/api/posts/' + id)
      .subscribe(res => {console.log(res);
    })
  }
  putPost(id, body) {
    return this.http.put('/api/posts/' + id,{id: body._id, title: body.title, description: body.description})
      .subscribe(res => {console.log(res);
    })
  }
}
