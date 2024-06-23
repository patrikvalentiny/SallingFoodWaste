import {Component, inject, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {RestService} from "../../services/rest.service";
import {Clearance} from "../../models/clearance";
import {OfferCardComponent} from "../offer-card/offer-card.component";
import {StorageKey, StorageService} from "../../services/storage.service";
import {Store} from "../../models/store";

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
export class StoreClearancesComponent implements OnInit{

  private readonly restService = inject(RestService);
  private readonly storageService = inject(StorageService);
  storeIdInput: FormControl<string | null> = new FormControl(null, [Validators.required]);
  storeNameInput: FormControl<string | null> = new FormControl(null, [Validators.required]);
  stores: Store[] = [];
  clearances: Clearance[] = [];
  storeSelect: FormControl = new FormControl<string | null> (null, [Validators.required]);


  constructor() {

  }
  ngOnInit(): void {
    this.stores = JSON.parse(this.storageService.getItemByKey(StorageKey.STORES) ?? '');
    this.storeSelect.setValue(this.stores.find(store => store.id === this.storageService.getItemByKey(StorageKey.LAST_STORE_ID))?.id ?? null);
  }

  async getClearances() {
    this.clearances = await this.restService.getStoreClearances(this.storeSelect.value);
    this.storageService.setItemByKey(StorageKey.LAST_STORE_ID, this.storeIdInput.value!);
  }

  addStoreButton(){
    this.addStore(this.storeNameInput.value!, this.storeIdInput.value!);
  }

  addStore(name:string, id:string) {
    const store:Store = {name:name, id:id};
    this.stores.push(store);
    this.storageService.setItemByKey(StorageKey.STORES, JSON.stringify([...this.stores, store]));
  }
}
