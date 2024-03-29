import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: string;
	@Input() postCreatedAt: string;

  constructor() { }

  ngOnInit() {
  }

  addLove(){
  	this.postLoveIts = this.postLoveIts + 1;
  }

  removeLove(){
  	this.postLoveIts = this.postLoveIts - 1;
  }
}
