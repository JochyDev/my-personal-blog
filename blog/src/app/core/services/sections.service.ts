import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from 'src/app/interfaces/section.interface';
import { environment } from 'src/environments/environment';

const baseApi = environment.base_api;

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) { }

  getSectionByName(name: string){
    return this.http.get<{error: boolean, data: Section}>(`${baseApi}/sections/${name}`)
  }
}
