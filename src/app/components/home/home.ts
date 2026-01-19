import { Component, inject } from '@angular/core';
import { RentalService } from '../../services/rentals.service';
import { RentalCardComponent } from '../rental-card/rental-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [RentalCardComponent],
})
export class Home {
  rentalService = inject(RentalService);
  rentals = this.rentalService.getAllRentals();
}
