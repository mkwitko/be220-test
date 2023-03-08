import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  cards = [
    {
      sectionTitle: 'Personal Online',
      icon: 'add',
      cards: [
        {
          adding: true,
          addText: 'Novo Treino',
          class: 'dark',
        },
        {
          title: 'Yoga Expressiva',
          picture: './../../../assets/img/profile/yoga.jpeg',
          class: 'dark',
        },
      ],
    },
    {
      sectionTitle: 'Programas',
      new: true,
      cards: [
        {
          title: 'Levantamento de Peso',
          active: true,
        },
        {
          title: 'Yoga Expressiva',
          picture: './../../../assets/img/profile/yoga.jpeg',
        },
      ],
    },
    {
      sectionTitle: 'Conteúdos',
      cards: [
        {
          blank: true,
          active: true,
        },
        {
          blank: true,
        },
      ],
    },
  ];

  constructor(public user: User) {}
}
