import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseApi = environment.base_api;

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(
    private http: HttpClient
  ) { }

  sendSubscription(body: any){
    return this.http.post(`${baseApi}/subscribers`, body)
  }
}
