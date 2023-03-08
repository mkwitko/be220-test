import { TitleComponent } from './title.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TitleComponent
  ],
  providers: []
})

export class MyCustomTitle {}