import { Component, inject, input } from '@angular/core';
import { Rental } from '../../models/rental.model';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrl: './rental-card.component.css',
  imports: [CurrencyPipe, NgOptimizedImage, RouterLink, StarRating],
})
export class RentalCardComponent {
  rental = input.required<Rental>();
  router = inject(Router);

  redirectToDetails(id: number) {
    this.router.navigate(['details/', id]);
  }
}
