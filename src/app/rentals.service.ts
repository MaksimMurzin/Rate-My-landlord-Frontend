import { Injectable } from '@angular/core';
import { Rental } from './rental-components/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  getRentals()
  {
    return [
      new Rental(1,'St. Peters Court', 500),
      new Rental(2,'10 Kittiwake Mews', 625),
      new Rental(3,'Miverna House', 650),
      new Rental(4,'10 Cartwright Way', 500),
      new Rental(5,'Littlebrook Ave', 600)
  ]
  }
}
