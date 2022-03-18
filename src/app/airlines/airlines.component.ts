import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { first, map, Observable } from 'rxjs';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  constructor(private service: AirlineService, private http: HttpClient, private dom: DomSanitizer) {
    this.changeText = false;
  }

  AirlineList: any;
  airline: any;
  changeText: boolean;
  arrays: any = [];


  displayAirlines() {
    this.service.getAirlines().subscribe((data: any) => {
      this.AirlineList = data;
      console.log(data)
    })
  }

  tempArr: any = [];
  newArr: any = [];

  change1(event: any) {
    if (event.target.checked) {
      this.tempArr = this.AirlineList.filter((x: any) =>
        x.alliance == "OW"
      );
      this.AirlineList = [];
      this.newArr.push(this.tempArr);
      for (let i = 0; i < this.newArr.length; i++) {
        let firstArr = this.newArr[i];
        for (let i = 0; i < firstArr.length; i++) {
          let obj = firstArr[i];
          this.AirlineList.push(obj)
          console.log(this.AirlineList);

        }
      }

    } else {

    }
  }

  change2(event: any) {
    if (event.target.checked) {
      this.tempArr = this.AirlineList.filter((x: any) =>
        x.alliance == "ST"
      );
      this.AirlineList = [];
      this.newArr.push(this.tempArr);
      for (let i = 0; i < this.newArr.length; i++) {
        let firstArr = this.newArr[i];
        for (let i = 0; i < firstArr.length; i++) {
          let obj = firstArr[i];
          this.AirlineList.push(obj)
          console.log(this.AirlineList);

        }
      }

    } else {

    }
  }

  change3(event: any) {
    if (event.target.checked) {
      this.tempArr = this.AirlineList.filter((x: any) =>
        x.alliance == "SA"
      );
      this.AirlineList = [];
      this.newArr.push(this.tempArr);
      for (let i = 0; i < this.newArr.length; i++) {
        let firstArr = this.newArr[i];
        for (let i = 0; i < firstArr.length; i++) {
          let obj = firstArr[i];
          this.AirlineList.push(obj)
          console.log(this.AirlineList);

        }
      }

    } else {

    }
  }


  ngOnInit(): void {
    this.displayAirlines();


  }



}

