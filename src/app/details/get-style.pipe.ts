import { Pipe, PipeTransform } from '@angular/core';
import { Details } from 'types';

@Pipe({ name: 'getStyle' })
export class GetStylePipe implements PipeTransform {

  transform(details: Details): any {

    const { background, border, width, height, fontColor, font } = details;
    const style = {
      'font-family': font || 'ARIEL',
      'width': (width || 20) + 'vw',
      'height': (height || 20) + 'vh',
      'border': `solid 4px ${border || 'green'}`,
      'background': background || 'pink',
      'color': fontColor || 'blue'

    };
    return style;
  }

}
