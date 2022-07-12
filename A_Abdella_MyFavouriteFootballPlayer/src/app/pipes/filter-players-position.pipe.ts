import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../models/content';

@Pipe({
  name: 'filterPlayersPosition'
})
export class FilterPlayersPositionPipe implements PipeTransform {

  transform(ContentItem: Content[], typeToFilterBy?: string): Content[] {
    return ContentItem.filter(player => {
      if (typeToFilterBy) {
       
        return typeToFilterBy === player.position;
      }
      return !player.position;
    });
  }



}
