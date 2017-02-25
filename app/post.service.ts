import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
@Injectable()

export class PostService{
    private _url = "http://www.buzzfeed.com/api/v2/feeds/lol";

    constructor(private _http:Http){

    }
    getPosts() {
    return this._http.get(this._url)
            .map(res => res.json());
    }
}