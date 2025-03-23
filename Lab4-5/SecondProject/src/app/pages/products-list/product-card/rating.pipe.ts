import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    let fullStars = '⭐'.repeat(Math.floor(value));
    let emptyStars = '☆'.repeat(5 - Math.floor(value));
    return fullStars + emptyStars;
  }

}
