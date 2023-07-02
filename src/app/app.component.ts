import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ThePropertiesFinder.com';
  showLoader = true;
  loadingTime = 1000;


  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');

    this.translateService.use(localStorage.getItem('lang') || 'en');
}

  ngOnInit() {
  setTimeout(() => {
    this.showLoader = false;
  }, this.loadingTime);
}
}
