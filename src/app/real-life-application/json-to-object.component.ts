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
      "amenities": [
        {
          "productTypeInfo": {
            "productId": "wifi",
            "productType": "AMENITY",
            "productSubtype": "WIFI",
            "productCategory": "NON-PHYSICAL-SERVICES"
          },
          "productContentInfo": {
            "primaryName": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "shortPrimaryName": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "secondaryName": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "shortSecondaryName": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "header": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "shortHeader": {
              "text": "Wi-Fi",
              "hasMarkup": "False"
            },
            "description": {
              "text": "In-flight Internet access available for purchase",
              "hasMarkup": "False"
            },
            "shortDescription": {
              "text": "Internet access available in the flight for travellers to use during the duration of there fly.",
              "hasMarkup": "False"
            },
            "iataDescription": {
              "text": "In flight description",
              "hasMarkup": "False"
            },
            "tagLine": {
              "text": "Sample Tag Line",
              "hasMarkup": "False"
            },
            "disclaimer": {
              "text": "In-Flight services and amenities may vary and are subject to change. Available globally where coverage exists. Requires payment by credit card for activation.",
              "hasMarkup": "False"
            },
            "learnMorelink": {
              "sourcePath": "/content/www/en_US/wifi.html",
              "size": "160"
            },
            "learnMorelinktext": {
              "sourcePath": "Learn More",
              "size": "160"
            }
          }
        }
      ]
    }

  `;
  displayData: ConsumerInfoDO;
  keys;
  response;
  private amenitiesAndMealsByCosPath: string= '../../assets/amenitiesAndMealsByCosResponse.json';


  constructor(
    private http: Http,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void{

        //this.displayData= JSON.stringify(this.jsonObject); //Working
        //this.displayData= JSON.parse(this.jsonObject).amenities; // Working

        this.http.get(this.amenitiesAndMealsByCosPath)
             .map(this.extractData, {headers: this.getHeaders()})
                .subscribe(respo => this.displayData= respo);


        //this.keys= Object.keys(this.displayData)
  }

  private extractData(res: Response):ConsumerInfoDO{
    	return res.json().originalRequest.consumerInfo.map(toConsumerInfo);
  }

  /*
  toOriginalRequest(origReq:any):OriginalRequestDO{
    let originalRequest= <OriginalRequestDO> ({
      consumerInfo: toConsumerInfo(origReq)
    });
    return originalRequest;
  }
  */

  private getHeaders(){
      // I included these headers because otherwise FireFox
      // will request text/html instead of application/json
      let headers = new Headers();
      headers.append('Accept', 'application/json;charset=UTF-8');
      return headers;
  }

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



