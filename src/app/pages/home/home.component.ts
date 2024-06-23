import { Component } from '@angular/core';
import {TokenInputComponent} from "../../components/token-input/token-input.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TokenInputComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
