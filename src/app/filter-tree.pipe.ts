import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterTree'
})
export class FilterTreePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter(it => {
      return it.name['it'].includes(searchText) || it.id === searchText || it.scientificName.name.includes(searchText);
    });
  }
}
