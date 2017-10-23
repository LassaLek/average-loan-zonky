import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorService} from '../../core/services/error.service';
import {Config} from '../../app.config';
import {Observable} from 'rxjs/Observable';
import {LoanModel} from '../model/loan.model';


@Injectable()
export class MarketplaceService {

  constructor(private http: Http,
              private errorHandler: ErrorService) { }

  getLoans(): Observable<Array<LoanModel>> {
        return this.http
          .get(Config.API_ENDPOINT + '/loans/marketplace')
          .map((res: Response) => res.json())
          .catch((err) => {
            this.errorHandler.present(err, 'Loading data from server');
            return this.getPreloadedLoans();
          });
  }

  private getPreloadedLoans(): Observable<Array<LoanModel>> {
    return this.http.get('assets/init/loans.json')
      .map(res =>
      {
        return res.json()
      });
  }
}
