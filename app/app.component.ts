import { Component } from '@angular/core';
@Component({
	selector : 'my-app',
	template : `<div class="jumbotron">
					<h3>welcome to Angular app</h3>
					<h5>Hello World..!!</h5>
					<h6>sravan is good boy</h6>
				</div>`,
	styles : [`
				.jumbotron{box-shadow : 0 2px 0 rgba(0,0,0,0.2);
					margin-top: 20px;}
				`]
})
export class AppComponent{}