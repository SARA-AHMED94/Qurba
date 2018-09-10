import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterString: string,propName:string): any[] {
    if (!items) return [];
    if (!filterString) return items;

    filterString = filterString.toLowerCase();

    return items.filter(it => {
      return it.name[propName].toLowerCase().includes(filterString);
    });
  }
}