import { ScreenService } from './services/screen/screen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
    private iconType = '-sharp';
    protected menu = [
        {
            title: 'Home',
            icon: 'home' + this.iconType,
            url: '/home',
        },
        {
            title: 'Personal Online',
            icon: 'barbell' + this.iconType,
            url: '/home',
        },
        {
            title: 'Programas',
            icon: 'school' + this.iconType,
            url: '/home',
        },
        {
            title: 'Perfil',
            icon: 'person' + this.iconType,
            url: '/home',
        },
        {
            title: 'Pagamentos',
            icon: 'card' + this.iconType,
            url: '/home',
        },
        {
            title: 'Sobre nós',
            icon: 'book' + this.iconType,
            url: '/home',
        },
    ]
  constructor(private screen: ScreenService) {}

  goTo(url: string)
  {
    
  }

  logout(){
    this.screen.presentToast('Olá, be220!', '1', 'Eu sou um toaster de sucesso!')
  }
}
