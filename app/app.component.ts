import { Component } from '@angular/core';
import { PostService } from './post.service';
import { OnInit } from '@angular/core'
@Component({
  selector: 'my-app',
  template: `<h1>BuzzFeed Front End Assignment</h1>
  <link rel="stylesheet" href="app/solid.2.6.0.min.css">
            <div *ngFor = "#dat of data"> 
    <div class="xs-block-grid-5 xs-mb4 xs-relative xs-t2 xs-l6">

        <div class="block-grid__item fill-white xs-border">
            <img class="xs-col-12 xs-block" src="{{dat.images.standard}}" width="100" height="100" alt="user" class="circle" />

            <div class="xs-p1"> 
                <h5 class="bold xs-mb1 text-orange"> {{dat.description}}  </h5>
            </div>

        </div>
    </div>
  </div>  
  
  `,
  styleUrls:['app/solid.2.6.0.min.css'],
})
export class AppComponent implements OnInit{ 

  data: any;
constructor(private _postService: PostService){
    
}

ngOnInit(){
this._postService.getPosts()
.subscribe(posts => {
    this.data = posts.buzzes;
    console.log("DATA");
    console.log(this.data);  }  );
  }
  

}
