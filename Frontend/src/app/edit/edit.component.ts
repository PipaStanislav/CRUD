import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {PostsService} from '../config/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

  postEdit;

  constructor (
    private postEditService: PostsService,
    private postEditRoute: ActivatedRoute
  ){}


  ngOnInit(){
    const id = this.postEditRoute.snapshot.paramMap.get('id');
    this.postEditService.getOnePost(id).subscribe(onePostEdit => {
      this.postEdit = onePostEdit;
      // console.log(this.postEdit.title, this.postEdit.description, this.postEdit._id);
      // console.log(typeof this.postEdit.title, typeof this.postEdit.description, typeof this.postEdit._id);
    })
  }
  edit (){
    const id = this.postEditRoute.snapshot.paramMap.get('id');
    const data = this.postEdit;
    this.postEditService.putPost(id, data);
    console.log(data);
  }


}
