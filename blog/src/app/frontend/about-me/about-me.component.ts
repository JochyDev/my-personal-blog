import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs';
import { SectionsService } from 'src/app/core/services/sections.service';
import { Section } from 'src/app/interfaces/section.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnInit {

  section!: Section

  constructor(
    private sectionsService: SectionsService,
    private elementRef: ElementRef
  ){}

  ngOnInit(): void {
    this.getSectionData()
  }

  getSectionData(){
    this.sectionsService.getSectionByName('AboutMe')
    .pipe( map( response => response.data ))
    .subscribe(section => {
      this.section = section;
    })
  }


}
