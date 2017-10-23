import {Component, OnDestroy, OnInit} from '@angular/core';
import {MarketplaceService} from '../providers/marketplace.service';
import {LoanModel} from '../model/loan.model';
import {RatingsEnum} from '../model/ratings.enum';
import {ErrorService} from '../../core/services/error.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit, OnDestroy {
  public loans: Array<LoanModel>;
  public rating: string;
  public ratingsArr: Array<string>;
  private loansSub: Subscription;

  constructor(private marketplaceService: MarketplaceService,
              private errorService: ErrorService) {
    this.loans = [];
    this.rating = 'AAAAA';
    this.ratingsArr = Object
      .keys(RatingsEnum)
      .map((rating) => {
        return rating;
      });
  }

  ngOnInit() {
    this.loansSub = this.marketplaceService.getLoans()
      .subscribe(
        this.success,
        this.fail
      );
  }

  ngOnDestroy() {
    this.loansSub.unsubscribe();
  }

  setRating(rating) {
    this.rating = this.ratingsArr[rating.index];
  }

  success = (data) => {
    console.log(data);
    this.loans = data;
  };

  fail = (err) => {
    this.errorService.present(err, 'subscribe to loans service');
  }
}
