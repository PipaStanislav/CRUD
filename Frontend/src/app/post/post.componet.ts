import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {PostsService} from '../config/crud.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post;

  constructor (
    private postService: PostsService,
    private postRoute: ActivatedRoute
  ){}

  ngOnInit () {
    const id = this.postRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.postService.getOnePost(id).subscribe(onePost => {
      this.post = onePost;
      console.log(this.post.title, this.post.description, this.post._id);
      console.log(typeof this.post.title, typeof this.post.description, typeof this.post._id);
    });
  }
}
