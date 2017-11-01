"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"jumbotron\">\n\t\t\t\t\t<h3>welcome to Angular app</h3>\n\t\t\t\t\t<h5>Hello World..!!</h5>\n\t\t\t\t\t<h6>sravan is good boy</h6>\n\t\t\t\t</div>",
            styles: ["\n\t\t\t\t.jumbotron{box-shadow : 0 2px 0 rgba(0,0,0,0.2);\n\t\t\t\t\tmargin-top: 20px;}\n\t\t\t\t"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map