import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LoanModel} from '../../model/loan.model';

@Component({
  selector: 'app-loan-tile',
  templateUrl: './loan-tile.component.html',
  styleUrls: ['./loan-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanTileComponent {

  @Input() loan: LoanModel = {
    id: 0,
    name: '',
    purpose: '',
    rating: '',
    amount: 0
  };

  constructor() {
  }

}
