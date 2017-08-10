import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OriginalRequestDO } from '../services/original-request';
import { ConsumerInfoDO } from '../services/consumer-info';

@Component({
  selector: 'json-to-object',
  templateUrl: './json-to-object.component.html',
  styleUrls: [
    '../app.component.css'
  ]
})

export class JsonToObjectComponent implements OnInit{
  title= "Json To Object Test Bench";
  jsonObject= `
    {
      "originalRequest": {
        "consumerInfo": {
          "channelId": "eComm",
          "applicationId": "Reissue",
          "pageId": "MYT",
          "transactionId": "f0ed63fb-4429-4f70-a903-b5ba975",
          "deviceType": null,
          "cannedResponse": null
        },
        "customerDetails": null,
        "segmentDetails": [
          {
            "sourceDestInfo": {
              "deptAirportCode": "ORD",
              "arrAirportCode": "ATL",
              "deptDateTime": "2017-04-28T20:00:00"
            },
            "carrierDetails": {
              "marketAirlineCode": null,
              "marketingFlightNo": null,
              "marketingClassOfService": null,
              "operatingAirlineCode": "DL",
              "operatingFlightNo": "972",
              "operatingClassOfService": "X"
            },
            "flightLegs": []
          }
        ]
      }
    }
  `;
  displayData: ConsumerInfoDO;
  private amenitiesAndMealsByCosPath: string= '../../assets/amenitiesAndMealsByCosResponse.json';
  testo;

  constructor(
    private http: Http,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void{

        //this.displayData= JSON.stringify(this.jsonObject); //Working
        //this.displayData= JSON.parse(this.jsonObject).amenities; // Working

        console.log("Gneo! ngOnInit3");

        this.getAll()
          .subscribe(displayData => this.displayData = displayData);

  }

  getAll(): Observable<ConsumerInfoDO>{

    // GET Working! with local file

        let info$ = this.http
          .get(`${this.amenitiesAndMealsByCosPath}`, {headers: this.getHeaders()})
          .map(mapConsumerInfo);
          return info$;
  }

  private getHeaders(){
      // I included these headers because otherwise FireFox
      // will request text/html instead of application/json
      let headers = new Headers();
      headers.append('Accept', 'application/json;charset=UTF-8');
      return headers;
  }

  private getParams(){
    let myParams = new URLSearchParams();
    //myParams.append('id', bookId);
    return myParams;
  }

}

function mapConsumerInfo(response: Response){
       // The response of the API has a results
       // property with the actual results
       console.log("Gneo! mapConsumerInfo");
       console.log("GNeo: " + response);
       console.log(response.json());
       console.log(response.json().originalRequest.consumerInfo);

       return toConsumerInfo(response.json().originalRequest.consumerInfo);
       //return response.json().originalRequest.map(toConsumerInfo)
}

function toConsumerInfo(r:any): ConsumerInfoDO{
   let consumerInfoObj= <ConsumerInfoDO> ({
    channelId: r.channelId,
    applicationId: r.applicationId,
    pageId: r.pageId,
    transactionId: r.transactionId,
    deviceType: r.deviceType,
    cannedResponse: r.cannedResponse
   });
   console.log('Parsed consumerInfoObj:', consumerInfoObj);
   return consumerInfoObj;
}

/*
function mapAmenities(response: Response): any{
     // The response of the API has a results
     // property with the actual results
     return response.json().amenities.map(toAmenity);
}
*/



