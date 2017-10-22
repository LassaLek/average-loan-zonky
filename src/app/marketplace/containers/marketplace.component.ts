import { Component, OnInit } from '@angular/core';
import {MarketplaceService} from '../providers/marketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  private loans;
  public filteredLoans;

  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit() {
    this.marketplaceService.getLoans()
      .subscribe(
      this.success,
      this.fail
    );
  }

  setRating(rating) {
    console.log('SET RATING', rating);
    let pairs = {
      0: 'AAA',
      1: 'AA',
      2: 'A++',
      3: 'A+',
      4: 'A',
      5: 'B',
      6: 'C',
      7: 'D',
    };
    this.filteredLoans = this.loans.filter((loan) => {
      return loan.rating === pairs[rating.index];
    })
  }

  success = (data) => {
    console.log(data);
    this.loans = data;
    this.filteredLoans = this.loans.filter((loan) => {
      return loan.rating === 'AAA';
    });
  };

  fail = (err) => {
    console.log(err);
  }
}
