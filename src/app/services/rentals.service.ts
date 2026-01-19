import { Injectable } from '@angular/core';
import { Rental } from '../models/rental.model';
import { rentals } from './rentals';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  getAllRentals(): Rental[] {
    return rentals;
  }

  getRentalById(id: number): Rental {
    return rentals.find((r) => r.id === Number(id));
  }
}
