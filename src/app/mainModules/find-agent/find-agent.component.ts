import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class FindAgentComponent {
  lang: String;
  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }
}
