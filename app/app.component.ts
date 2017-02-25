import { Component } from '@angular/core';
import { PostService } from './service/post.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { OnInit } from '@angular/core'
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/styles/solid.2.6.0.min.css','app/styles/scroll.css'],
})
export class AppComponent implements OnInit{ 

  data: any;
constructor(private _postService: PostService){
    
}
onScroll () {
  
        console.log('scrolled!!')
    }

ngOnInit(){
this._postService.getPosts()
.subscribe(posts => {
    this.data = posts.buzzes;
    console.log("DATA");
    console.log(this.data);
    });
  }
}
