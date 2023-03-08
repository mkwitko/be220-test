import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card.component';

@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProfileCardComponent
  ],
  providers: []
})

export class MyCustomProfileCard {}