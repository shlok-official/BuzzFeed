import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule }    from '@angular/http';
import {PostService} from './post.service';
@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ PostService ]
})
export class AppModule { }
