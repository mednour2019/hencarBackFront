import { Pipe, PipeTransform } from '@angular/core';
import { maison } from '../models/maison';

@Pipe({
  name: 'searchfilter6'
})
export class Searchfilter6Pipe implements PipeTransform {

  transform(maisons:maison[],searchValue6:string): maison[] {
    if(!maisons||!searchValue6){
      return maisons;
    }
    return maisons.filter(maison=>maison.ismeuble.toLocaleLowerCase().includes(searchValue6.toLocaleLowerCase()));
    
  }

}
