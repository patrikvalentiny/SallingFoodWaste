import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {FoodWasteByStore} from "../models/food-waste-by-store";
import {Clearance} from "../models/clearance";
import {StorageKey, StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly http = inject(HttpClient);
  private readonly storageService = inject(StorageService);
  private readonly baseUrl = 'https://api.sallinggroup.com';
  private headers: HttpHeaders = new HttpHeaders();

  constructor() {
    const token = this.storageService.getItemByKey(StorageKey.TOKEN);
    if (token) {
      this.setToken(token);
    }
  }

  setToken(token: string) {
    this.headers = this.headers!.set('Authorization', `Bearer ${token}`);
  }

  getStores() {
    return this.http.get(`${this.baseUrl}/v2/stores`, {headers: this.headers});
  }

  getStoreById(storeId: string) {
    return this.http.get(`${this.baseUrl}/v2/stores/${storeId}`, {headers: this.headers});
  }

  async getStoreClearances(storeId: string): Promise<Clearance[]> {
    const call = this.http.get<FoodWasteByStore>(`${this.baseUrl}/v1/food-waste/${storeId}`, {headers: this.headers});
    const response = await firstValueFrom(call);
    return response.clearances;
  }
}
