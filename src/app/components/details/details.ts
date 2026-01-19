import { Component, inject, input, computed } from '@angular/core'; // Added computed
import { RentalService } from '../../services/rentals.service';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Rental } from '../../models/rental.model';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrl: './details.css',
  imports: [NgOptimizedImage, CurrencyPipe, StarRating],
})
export class Details {
  private readonly rentalService = inject(RentalService);
  id = input.required<string>(); // Use required for safety

  // 2. Use a computed signal to reactively fetch the data
  // This automatically re-runs if the URL ID changes!
  rental = computed(() => {
    const propertyId = Number(this.id()); // Invoke the signal with ()
    return this.rentalService.getRentalById(propertyId);
  });
}
