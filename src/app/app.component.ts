import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 arr = [1, 1, 2, 3, 5, 8, 13 ];

 objs = [
   {title: 'Post1', author: 'Stas', comments: [
       {name: 'Max', text: 'lorem1'},
       {name: 'Max', text: 'lorem2'},
       {name: 'Max', text: 'lorem3'}
     ]},
   {title: 'Post2', author: 'Stas2', comments: [
       {name: 'Max2', text: 'lorem1'},
       {name: 'Max2', text: 'lorem2'},
       {name: 'Max2', text: 'lorem3'}
     ]},
   ];

}















