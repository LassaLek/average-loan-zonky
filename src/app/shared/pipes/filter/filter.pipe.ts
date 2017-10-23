import { Pipe, PipeTransform } from '@angular/core';
import {LoanModel} from '../../../marketplace/model/loan.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<LoanModel>, args: string) {
    return items.filter(item => {
      return item.rating === args;
    });
  }

}
