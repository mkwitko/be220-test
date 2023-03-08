import { ScreenService } from './../../services/screen/screen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private screen: ScreenService) { }

  notification() {
    this.screen.presentToast(
      'Você não tem nenhuma notificação.',
      '',
      'warning'
    );
  }

}
