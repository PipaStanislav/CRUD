import { Component, OnInit } from '@angular/core';


import {PostsService} from '../config/crud.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  posts;

  constructor (
    private postsService: PostsService,
  ){}

  ngOnInit (){
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      // console.log( typeof posts, posts);
    })
  }

  delete (id){
    this.postsService.deleteOnePost(id);
    // console.log(id);
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      // console.log( typeof posts, posts);
    })
  }
}
