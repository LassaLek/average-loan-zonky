import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MarketplaceService} from '../providers/marketplace.service';
import {LoanModel} from '../model/loan.model';
import {RatingsEnum} from '../model/ratings.enum';
import {ErrorService} from '../../core/services/error.service';
import {Subscription} from 'rxjs/Subscription';
import {FilterPipe} from '../../shared/pipes/filter/filter.pipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit, OnDestroy {
  public loans: Array<LoanModel> = [];
  public filteredLoans: Array<LoanModel> = [];
  public ratingsArr: Array<string> = this.enumToArray(RatingsEnum);
  public averageOfFilteredLoans: number = 0;
  public colNum: number = this.countColNumber();

  private loansSub: Subscription = null;
  private responsiveSub: Subscription = null;

  constructor(private marketplaceService: MarketplaceService,
              private errorService: ErrorService,
              private filterPipe: FilterPipe) {
  }

  ngOnInit() {
    this.loansSub = this.marketplaceService
      .getLoans()
      .subscribe(
        this.success,
        this.fail,
        this.complete
      );
    this.responsiveSub = this.setColNum$()
      .subscribe(
        (colNum) => {
          this.colNum = colNum;
        },
        this.fail,
        this.complete
      );
  }

  ngOnDestroy() {
    this.loansSub.unsubscribe();
    this.responsiveSub.unsubscribe();
  }

  setRating(rating) {
    this.filteredLoans = this.filterPipe.transform(this.loans, this.ratingsArr[rating.index]);
    this.averageOfFilteredLoans = MarketplaceService
      .countAverage(
        MarketplaceService.sumArray(
          MarketplaceService.loansToAmounts(this.filteredLoans)
        ),
        this.filteredLoans.length
      );
  }

  private success = (data) =>{
    this.loans = data;
    this.setRating({index: 0});
  };

  private fail = (err) => {
    this.errorService.present(err, 'Marketplace subscriptions');
  };

  private complete() {

  }

  private setColNum$() {
    return Observable
      .fromEvent(window, 'resize')
      .debounceTime(100)
      .map(this.countColNumber);
  }

  private countColNumber(): number {
    if (window && window.innerWidth) {
      return Math.floor(window.innerWidth / 250) || 1;
    }
    return 1;
  }

  private enumToArray(enumObj: any) {
    if (!enumObj) {
      return [];
    }

    return Object
      .keys(enumObj)
      .map((rating) => {
        return rating;
      });
  }
}
