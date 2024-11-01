import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') { //='asc' is default value of the direction thats how u set default value
    const sorted = [...value]; //... JS spread operator is used to copy all yhe elements from value array to sorted array.
    sorted.sort((a,b) =>{ //a and b gives 2 values from array for comparison
      if(direction === 'asc'){
        return a>b ? 1:-1; //now if a is grater than b it moves backwards so it is sorted ascending.
      }else{
        return a>b ? -1:1;
      }
    });
    return sorted;
  }

}
