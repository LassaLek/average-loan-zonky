import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LoanModel} from '../../model/loan.model';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanListComponent{
  @Input() loans: Array<LoanModel> = [];
  @Input() colNum: number = 1;

  constructor() { }

  trackLoansById(index, item) {
    return item.id;
  }
}
