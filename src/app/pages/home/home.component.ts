import {Component} from '@angular/core';
import {TokenInputComponent} from "../../components/token-input/token-input.component";
import {StoreClearancesComponent} from "../../components/store-clearances/store-clearances.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TokenInputComponent,
    StoreClearancesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
