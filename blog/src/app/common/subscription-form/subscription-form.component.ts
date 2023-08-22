import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/core/services/subscribe.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {

  subcriptionForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private subscribeService: SubscribeService,
  ){

  }

  sendSubscription(){
    if(this.subcriptionForm.invalid){
      return;
    }

    this.subscribeService.sendSubscription(this.subcriptionForm.value)
    .subscribe( res => {
      console.log(res)
      this.subcriptionForm.reset();
    })
  }

}
