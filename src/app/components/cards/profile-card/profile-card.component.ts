import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {

    @Input() user: UserInterface = {};

  constructor() { }
}
