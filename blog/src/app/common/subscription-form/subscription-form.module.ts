import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionFormComponent } from './subscription-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubscriptionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SubscriptionFormComponent
  ]
})
export class SubscriptionFormModule { }
