import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErrorService} from '../../core/services/error.service';
import {Config} from '../../app.config';
import {Observable} from 'rxjs/Observable';
import {LoanModel} from '../model/loan.model';


@Injectable()
export class MarketplaceService {

  static loansToAmounts(loans: Array<LoanModel>): Array<number> {
    return loans
      .map((loan) => {
        return loan.amount;
      });
  }

  static sumArray(arr: Array<number>): number {
    if (Array.isArray(arr) && (arr.length !== 0)) {
      return arr.reduce((sum, curr) => {
        return sum + curr;
      });
    }
    return 0;
  }

  static countAverage(sum: number, count: number): number {
    if (typeof sum === 'number' && typeof count === 'number' && sum >= 0 && count > 0) {
      return this.roundToTwoDecimal(sum / count);
    }

    return 0;
  }

  static roundToTwoDecimal(unRounded: number): number {
    return +(Math.round(unRounded * 100) / 100).toFixed(2);
  }

  constructor(private http: Http,
              private errorHandler: ErrorService) {
  }

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
    return this.http
      .get('assets/init/loans.json')
      .map((res) => {
        return res.json();
      });
  }
}
