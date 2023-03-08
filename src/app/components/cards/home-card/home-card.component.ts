import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent {
  @Input() title: string;
  @Input() card: any;
  @Input() icon: any;
  @Input() isNew: any;

  goTo(url: string) {}
}
