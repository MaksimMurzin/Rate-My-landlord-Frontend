import { Component } from '@angular/core';
import { Rental } from '../rental.model';
import { RentalService } from '../../rentals.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.css'
})
export class RentalListComponent {
  rentals : Rental[];

  constructor(rentalService: RentalService)
  {
    this.rentals = rentalService.getRentals();
  }
}
