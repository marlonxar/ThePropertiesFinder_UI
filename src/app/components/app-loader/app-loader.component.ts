import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent {
  lang: String;

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }

}
