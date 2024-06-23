import {Component, Input} from '@angular/core';
import {Clearance} from "../../models/clearance";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @Input() clearance!: Clearance;

}
