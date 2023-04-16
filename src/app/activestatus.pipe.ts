import { Pipe, PipeTransform } from '@angular/core';

import{StudentInterface} from 'Model/studentInterface'

@Pipe({
  name: 'activestatus'
})
export class ActivestatusPipe implements PipeTransform {

  transform(arr: StudentInterface[]): StudentInterface[] {
    return  arr.filter(arr=> arr.Active=="Yes")
  }

}
