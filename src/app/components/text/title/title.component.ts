import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title: string;
  @Input() class: string;
  @Input() icon: string;
  @Input() isNew: boolean;
  @Input() classIcon: string;
}
