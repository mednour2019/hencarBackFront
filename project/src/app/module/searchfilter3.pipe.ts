import { Pipe, PipeTransform } from '@angular/core';
import { Immeuble } from '../models/immeuble';

@Pipe({
  name: 'searchfilter3'
})
export class Searchfilter3Pipe implements PipeTransform {

  transform(immeubles:Immeuble[],searchValue3:string): Immeuble[] {
    if(!immeubles||!searchValue3){
      return immeubles;
    }
    return immeubles.filter(Immeuble=>Immeuble.name.toLocaleLowerCase().includes(searchValue3.toLocaleLowerCase()));
    
  }

}
