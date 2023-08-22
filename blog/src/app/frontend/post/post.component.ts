import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post!: Post

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ){}
  
  
  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.getPost(data?.id);
    });
  }

  getPost(id: string){
    this.postsService.getPostById(id)
    .pipe(map( response => response.data))
    .subscribe( (post: Post) => {
      console.log(post)
       this.post = post 
    }) 
  }

  

}
