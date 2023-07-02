import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lang: String;

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }
}
