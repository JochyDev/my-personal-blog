import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { SubscriptionFormModule } from 'src/app/common/subscription-form/subscription-form.module';
import { FooterModule } from 'src/app/common/footer/footer.module';



@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SubscriptionFormModule,
    FooterModule
  ]
})
export class AboutMeModule { }
