import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {RestService} from "../../services/rest.service";
import {Clearance} from "../../models/clearance";
import {OfferCardComponent} from "../offer-card/offer-card.component";
import {StorageKey, StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-store-clearances',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    OfferCardComponent
  ],
  templateUrl: './store-clearances.component.html',
  styleUrl: './store-clearances.component.css'
})
export class StoreClearancesComponent {
  private readonly restService = inject(RestService);
  private readonly storageService = inject(StorageService);
  storeIdInput: FormControl<string | null> = new FormControl(this.storageService.getItemByKey(StorageKey.LAST_STORE_ID), [Validators.required]);
  clearances: Clearance[] = [];

  async getClearances() {
    this.clearances = await this.restService.getStoreClearances(this.storeIdInput.value!);
    this.storageService.setItemByKey(StorageKey.LAST_STORE_ID, this.storeIdInput.value!);
  }
}
