import { Pipe, PipeTransform } from '@angular/core';
import { Locateur } from '../models/locateur';

@Pipe({
  name: 'searchfilter2'
})
export class Searchfilter2Pipe implements PipeTransform {

  transform(locateurs:Locateur[],searchValue2:string): Locateur[] {
    if(!locateurs||!searchValue2){
      return locateurs;
    }
    return locateurs.filter(locateur=>locateur.firstname.toLocaleLowerCase().includes(searchValue2.toLocaleLowerCase()));
    
  }

  

}
