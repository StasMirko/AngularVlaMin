import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts: Post[] = [
  {title: 'I want to learn Angular component', text: 'I learn component', id: 1},
  {title: 'The next block', text: 'It will be about directives and about pipes yet', id: 2}
]
}















