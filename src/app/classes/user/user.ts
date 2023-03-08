import { UserInterface } from './../../interfaces/user';
import { Injectable } from '@angular/core';
@Injectable()
export class User {
  public info: UserInterface = {
    name: 'Leonardo Santos',
    picture: './../../../assets/img/profile/suarez.webp',
    level: 'Nível Roxo',
    class: 'purple',
  };
  constructor() {}
}
