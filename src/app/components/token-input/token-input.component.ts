import {Component, inject} from '@angular/core';
import {StorageKey, StorageService} from "../../services/storage.service";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-token-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
  <div class="flex flex-row p-2 gap-2 w-full">
    <input class="input input-accent w-full" type="text" placeholder="Enter your token here" [formControl]="tokenInput" />
    <button class="btn btn-accent" (click)="setToken()" [disabled]="!tokenInput.valid">Set</button>
  </div>
  `,
  styles: ``
})
export class TokenInputComponent {
  private readonly storageService = inject(StorageService);
  tokenInput :FormControl<string | null> = new FormControl(this.storageService.getItemByKey(StorageKey.TOKEN), [Validators.required]);

  setToken() {
    this.storageService.setItemByKey(StorageKey.TOKEN, this.tokenInput.value!);
  }

}
