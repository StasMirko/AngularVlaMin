import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{
posts: Post[] = [
  {title: 'I want to learn Angular component', text: 'I learn component', id: 1},
  {title: 'The next block', text: 'It will be about directives and about pipes yet', id: 2}
];

  ngOnInit(): void {
  // setTimeout(() => {
  //   console.log('Timeout');
  //   this.posts[0] ={
  //     title: 'changed!',
  //     text: 'changed2',
  //     id: 33
  //   };
  // }, 5000);
  }


  // tslint:disable-next-line:typedef
  updatePosts(post: Post){
    this.posts.unshift(post);
  }

  removePost(id: number){
    console.log('id to remove', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }

}















