import { Component, inject } from '@angular/core';
import { Rental } from '../rental.model';
import { RentalService } from '../../rentals.service';

@Component({
    selector: 'app-rental-list',
    templateUrl: './rental-list.component.html',
    styleUrl: './rental-list.component.css',
    standalone: false
})
export class RentalListComponent {
  rentalService = inject(RentalService);
  rentals = this.rentalService.getRentals();
}
