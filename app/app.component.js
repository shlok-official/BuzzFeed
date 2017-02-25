"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var AppComponent = (function () {
    function AppComponent(_postService) {
        this._postService = _postService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postService.getPosts()
            .subscribe(function (posts) {
            _this.data = posts.buzzes;
            console.log("DATA");
            console.log(_this.data);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>BuzzFeed Front End Assignment</h1>\n  <link rel=\"stylesheet\" href=\"app/solid.2.6.0.min.css\">\n            <div *ngFor = \"#dat of data\"> \n    <div class=\"xs-block-grid-5 xs-mb4 xs-relative xs-t2 xs-l6\">\n\n        <div class=\"block-grid__item fill-white xs-border\">\n            <img class=\"xs-col-12 xs-block\" src=\"{{dat.images.standard}}\" width=\"100\" height=\"100\" alt=\"user\" class=\"circle\" />\n\n            <div class=\"xs-p1\"> \n                <h5 class=\"bold xs-mb1 text-orange\"> {{dat.description}}  </h5>\n            </div>\n\n        </div>\n    </div>\n  </div>  \n  \n  ",
        styleUrls: ['app/solid.2.6.0.min.css'],
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map