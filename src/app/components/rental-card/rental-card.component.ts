import { Component, inject, input } from '@angular/core';
import { Rental } from '../../models/rental.model';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrl: './rental-card.component.css',
  imports: [CurrencyPipe, NgOptimizedImage, RouterLink],
})
export class RentalCardComponent {
  rental = input.required<Rental>();
}
