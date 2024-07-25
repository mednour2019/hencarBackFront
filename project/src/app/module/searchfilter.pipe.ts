import { Pipe, PipeTransform } from '@angular/core';
import { locataire } from '../models/locataire';
import { Locateur } from '../models/locateur';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(locataires:locataire[],searchValue:string):locataire[] {
    if(!locataires||!searchValue){
    return locataires;
  }
  return locataires.filter(locataire=>locataire.firstname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  

  }


}
