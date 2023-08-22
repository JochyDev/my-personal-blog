import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  posts: Post[] = [];
  currentPage: number = 1; // Página actual
  postsPerPage: number = 6; // Número de artículos por página
  totalPosts: number = 0; // Total de artículos

  constructor(
    private postService: PostsService
  ){}
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAllPosts()
    .pipe(
      map( (responose) => responose.data)
    )
    .subscribe(({posts, total}: { posts: Post[], total: number }) => {
      this.posts = posts;
      this.totalPosts = total;
    })
  }

  getArticlesForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    return this.posts.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }

  getPageNumbers(): number[] {
    const totalPagesToShow = 3; // Número máximo de páginas a mostrar en la barra de navegación
    const pageNumbers: number[] = [];
  
    // Lógica para determinar los números de página a mostrar
    const startPage = Math.max(1, this.currentPage - Math.floor(totalPagesToShow / 2));
    const endPage = Math.min(startPage + totalPagesToShow - 1, this.getTotalPages());
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return pageNumbers;
  }

  getTotalPages(): number {
    return Math.ceil(this.totalPosts / this.postsPerPage);
  }



}
