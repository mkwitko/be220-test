import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeCardComponent } from './home-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { MyCustomTitle } from '../../text/title/title.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeCardComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    MyCustomTitle,
    SwiperModule,
  ],
  exports: [HomeCardComponent],
  providers: [],
})
export class MyCustomHomeCard {}
