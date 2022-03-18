import { HttpClient, HttpClientJsonpModule, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Airline } from './airline';
import { AirlineService } from './airline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kayak-coding-challenge';

  constructor(){

  }


  
  ngOnInit(): void {
  

    
  }
}
