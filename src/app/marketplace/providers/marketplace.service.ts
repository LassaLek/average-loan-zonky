import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// TODO CORS problem, now unefective tree shaking
declare var require: any;
declare var Zone, fetch, Request;
const request = require('request-promise');

@Injectable()
export class MarketplaceService {

  constructor(private http: Http) { }

  getLoans() {

/*    return fetch('https://api.zonky.cz/loans/marketplace',{mode:'no-cors', method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      .then(function(response){
        console.log('BODY:', response.body);
        return response;
      })
      .then((rrr) => {
        console.log('RRR:', rrr.body);
      });*/
/*    return request.get({
      url: 'https://api.zonky.cz/loans/marketplace',
      json: true,
      mode: 'no-cors'
    }).then(
      (res) =>
      {
        return res.json()
      }
    );*/
        return this.http.get('assets/init/loans.json')
          .map(res =>
          {
            return res.json()
          });
  }

  get() {
/*    return this.http
      .get('https://crossorigin.me//https://api.zonky.cz/loans/marketplace')
      .map((res: any) => res.json())
      .catch(() => {

      });*/
  }


}
