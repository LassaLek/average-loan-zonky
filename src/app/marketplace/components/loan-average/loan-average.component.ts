import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-loan-average',
  templateUrl: './loan-average.component.html',
  styleUrls: ['./loan-average.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanAverageComponent {

  @Input() averageLoan: number;

  constructor() {
  }

}
