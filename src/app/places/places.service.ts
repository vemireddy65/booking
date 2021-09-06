import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

private _places: Place[] = [
  new Place(
    'p1',
    'TajMahal',
    'Symbol of love',
    // eslint-disable-next-line max-len
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/220px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
    150
    ),

    new Place(
      'p2',
      'Charminar',
      'Symbol of telangana',
      'https://www.thehindu.com/news/cities/Hyderabad/d9nh5i/article33864232.ece/ALTERNATES/LANDSCAPE_1200/hy23Charminar',
      150
      ),
      new Place(
        'p3',
        'Charminar',
        'Symbol of telangana',
        'https://www.thehindu.com/news/cities/Hyderabad/d9nh5i/article33864232.ece/ALTERNATES/LANDSCAPE_1200/hy23Charminar',
        150
        ),
        new Place(
          'p4',
          'Charminar',
          'Symbol of telangana',
          'https://www.thehindu.com/news/cities/Hyderabad/d9nh5i/article33864232.ece/ALTERNATES/LANDSCAPE_1200/hy23Charminar',
          150
          ),

          new Place(
            'p5',
            'TajMahal',
            'Symbol of love',
            // eslint-disable-next-line max-len
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/220px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
            150
            ),
];

get places(){
  // eslint-disable-next-line no-underscore-dangle
  return [...this._places];
}

}
