import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { FooterModule } from 'src/app/common/footer/footer.module';


@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    NgxTwitterWidgetsModule,
    FooterModule
  ],
  bootstrap: [TimelineComponent]
})
export class TimelineModule { }
