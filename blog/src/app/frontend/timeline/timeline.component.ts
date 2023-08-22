import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  isLoading: boolean = true 

  //TODO: loading para el componente de twitter

  onLoad(){
    this.isLoading = false
  }

}
