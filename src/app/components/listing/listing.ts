import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Rental } from '../../models/rental.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-listing',
  imports: [RouterLink, NgOptimizedImage, CurrencyPipe],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Listing {
  rental = input.required<Rental>();
}
