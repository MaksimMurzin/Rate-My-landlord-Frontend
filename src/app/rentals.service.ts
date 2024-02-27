import { Injectable } from '@angular/core';
import { Rental } from './rental-components/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  getRentals()
  {
    return [
      new Rental('St. Peters Court', 500),
      new Rental('10 Kittiwake Mews', 625),
      new Rental('Miverna House', 650),
      new Rental('10 Cartwright Way', 500)
  ]
  }
}
