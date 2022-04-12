import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary', //name of pipe
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, limit?: number) {
    if (!value) {
      return;
    }
    let actualLimit = limit ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
