import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/interfaces/post.interface';

const baseApi = environment.base_api;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPostById(id: string){
    return this.http.get<{error: boolean, data: Post}>(`${baseApi}/posts/${id}`);
  }

  getAllPosts(){
    return this.http.get<{error: boolean, data: {posts: Post[], total: number}}>(`${baseApi}/posts`);
  }
}
