import { Component } from '@angular/core';
import { SpinnerService } from './core/services/spinners.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  spinnerService: SpinnerService;
  constructor(
    spinnerService: SpinnerService
  ){
    this.spinnerService = spinnerService; 
  }
}
