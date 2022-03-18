import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private apiUrl = 'https://www.kayak.com/h/mobileapis/directory/airlines/homework';

  constructor(private http: HttpClient) { }

  public getAirlines(): any {
   
    return this.http.jsonp(this.apiUrl, 'jsonp',);
  }


  
    // this.http.jsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', 'jsonp')
    //   .subscribe((data) => {
    //     console.log(data);
    //   })
}




