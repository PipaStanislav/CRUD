import { Component} from '@angular/core';


import {PostsService} from '../config/crud.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent{
  newPost = {
    title: 'Title',
    description: 'Description'
  };

  constructor (
    private newPostServis: PostsService
  ){}


  submit (){
    const data = this.newPost;
    this.newPostServis.postPost(data)
    console.log(data)
  }
}
