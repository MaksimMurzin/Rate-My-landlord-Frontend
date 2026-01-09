import { Component, input } from '@angular/core';
import { Rental } from '../rental.model';

@Component({
    selector: 'app-rental-card',
    templateUrl: './rental-card.component.html',
    styleUrl: './rental-card.component.css',
    standalone: false
})
export class RentalCardComponent {
    rental = input.required<Rental>();
}
