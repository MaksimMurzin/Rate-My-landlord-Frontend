import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  rating = input<number | null>(null);
  stars = [1, 2, 3, 4, 5];

  ariaLabel = computed(() =>
    this.rating() ? `Rated ${this.rating()} out of 5 stars` : 'Not yet rated',
  );
}
