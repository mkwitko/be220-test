import { MyCustomHomeCard } from './../../components/cards/home-card/home-card.module';
import { MyCustomProfileCard } from './../../components/cards/profile-card/profile-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MyCustomHeader } from 'src/app/components/header/header.modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyCustomHeader,
    MyCustomProfileCard,
    MyCustomHomeCard
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
