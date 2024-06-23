import {Component, Input} from '@angular/core';
import {Clearance} from "../../models/clearance";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @Input() clearance!: Clearance;

}
