import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { FooterModule } from 'src/app/common/footer/footer.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FooterModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
