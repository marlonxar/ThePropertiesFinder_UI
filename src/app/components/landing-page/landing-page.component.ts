import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  lang: String;

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }

}
