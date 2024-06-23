import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly storage = window.localStorage;
  constructor() { }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }
 setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getItemByKey(key: StorageKey): string | null {
    return this.getItem(key);
  }
  setItemByKey(key: StorageKey, value: string) {
    this.setItem(key, value);
  }
}

export enum StorageKey {
  THEME = 'theme',
  TOKEN = 'token',
}
