import {Component, OnDestroy, OnInit} from '@angular/core';
import {MarketplaceService} from '../providers/marketplace.service';
import {LoanModel} from '../model/loan.model';
import {RatingsEnum} from '../model/ratings.enum';
import {ErrorService} from '../../core/services/error.service';
import {Subscription} from 'rxjs/Subscription';
import {FilterPipe} from '../../shared/pipes/filter/filter.pipe';

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
  private loansSub: Subscription = null;

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
  }

  ngOnDestroy() {
    this.loansSub.unsubscribe();
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

  private success = (data) => {
    this.loans = data;
    this.setRating({index: 0});
    this.averageOfFilteredLoans = MarketplaceService.countAverage(0,0);
  };

  private fail = (err) => {
    this.errorService.present(err, 'subscribe to loans service');
  };

  private complete = () => {

  };

  private enumToArray(enumObj: RatingsEnum) {
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
