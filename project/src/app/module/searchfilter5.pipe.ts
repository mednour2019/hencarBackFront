import { Pipe, PipeTransform } from '@angular/core';
import { Locateur } from '../models/locateur';

@Pipe({
  name: 'searchfilter5'
})
export class Searchfilter5Pipe implements PipeTransform {

  transform(locateurs:Locateur[],searchValue5:string): Locateur[] {
    if(!locateurs||!searchValue5){
      return locateurs;
    }
    return locateurs.filter(Locateur=>Locateur.cin.toLocaleLowerCase().includes(searchValue5.toLocaleLowerCase()));
    
  }

}
