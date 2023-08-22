import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionFormModule } from 'src/app/common/subscription-form/subscription-form.module';
import { FooterModule } from 'src/app/common/footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SubscriptionFormModule,
    FooterModule
  ]
})
export class HomeModule { }
