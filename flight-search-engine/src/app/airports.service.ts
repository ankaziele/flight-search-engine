import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from './airport';
import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  airports = [
    {
        "airport": "Lodz Lublinek Airport",
        "code": "lcj",
        "country": "Poland"
    },
    {
        "airport": "Lome",
        "code": "lfw",
        "country": "Togo"
    },
    {
        "airport": "London, all airports",
        "code": "lon",
        "country": "United Kingdom"
    },
    {
        "area": "London area airports",
        "items": [
            {
                "airport": "London City Airport",
                "code": "lcy",
                "country": "United Kingdom"
            },
            {
                "airport": "London Gatwick",
                "code": "lgw",
                "country": "United Kingdom"
            },
            {
                "airport": "London Heathrow",
                "code": "lhr",
                "country": "United Kingdom"
            },
            {
                "airport": "London-Stansted",
                "code": "stn",
                "country": "United Kingdom"
            },
            {
                "airport": "Southampton",
                "code": "sou",
                "country": "United Kingdom"
            }
        ]
    },
    {
        "airport": "London (CA)",
        "code": "yxu",
        "country": "Canada"
    },
    {
        "area": "London, Canada area airports",
        "items": [
            {
                "airport": "Sarnia",
                "code": "yzr",
                "country": "Canada"
            },
            {
                "airport": "Windsor",
                "code": "yqg",
                "country": "Canada"
            }
        ]
    },
    {
        "airport": "Londrina",
        "code": "ldb",
        "country": "Brazil"
    },
    {
        "airport": "Longyearbyen - Svalbard",
        "code": "lyr",
        "country": "Norway"
    },
    {
        "airport": "Los Angeles International, CA",
        "code": "lax",
        "country": "USA"
    },
    {
        "airport": "Louisville International, KY",
        "code": "sdf",
        "country": "USA"
    },
    {
        "airport": "Lourdes/Tarbes",
        "code": "lde",
        "country": "France"
    },
    {
        "area": "Lourdes/Tarbes area airports",
        "items": [
            {
                "airport": "Biarritz - Pays Basque",
                "code": "biq",
                "country": "France"
            },
            {
                "airport": "Pamplona",
                "code": "pna",
                "country": "Spain"
            }
        ]
    }
]



  constructor(private httpClient: HttpClient) { }

  getAirports(query) {
    // return JSON.parse(JSON.stringify(this.airports));
    return this.httpClient.get<(Airport | Area)[]>(`http://localhost:4200/service/autosuggest/airport?rep=airportsReq&start=0&rd=y&site=PL&lang=en&portal=LH&query=${query}&apptype=ibebo`)

  }

  getFlatListOfAirports(airportsList) {
    //   debugger
      let flatListAirports = [];
      for(var i =0; i < airportsList.length; i++) {
          if (airportsList[i].airport) {
              flatListAirports.push(airportsList[i])
          } else {
            flatListAirports.push(...airportsList[i].items)
          }
        }
        return flatListAirports
  }



}
