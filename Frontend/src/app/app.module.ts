import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.componet';
import { EditComponent} from './edit/edit.component';
import { PostsService } from './config/crud.service';


const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'new', component: NewComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewComponent,
    PostComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [ RouterModule ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
