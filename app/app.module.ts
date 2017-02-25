import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AppComponent }   from './app.component';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HttpModule }    from '@angular/http';
import { PostService } from './service/post.service';
@NgModule({
  imports:      [ BrowserModule ,HttpModule ,InfiniteScrollModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PostService ]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);