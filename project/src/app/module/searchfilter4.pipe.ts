import { Pipe, PipeTransform } from '@angular/core';
import { locataire } from '../models/locataire';

@Pipe({
  name: 'searchfilter4'
})
export class Searchfilter4Pipe implements PipeTransform {

  transform(locataires:locataire[],searchValue4:string): locataire[] {
    if(!locataires||!searchValue4){
      return locataires;
    }
    return locataires.filter(locataire=>locataire.cin.toLocaleLowerCase().includes(searchValue4.toLocaleLowerCase()));
    
  }

}
