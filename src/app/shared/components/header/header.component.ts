import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lang: String;

  constructor(private translateService: TranslateService, private router: Router){
    this.lang = localStorage.getItem('lang') || 'en';
  }
  
  getCurrentRoute(): string {
    return this.router.url;
  }

  changeLang(target: EventTarget | null) {
    if (target instanceof HTMLSelectElement) {
      const lang = target.value;
     localStorage.setItem('lang', lang);
     window.location.reload();
    }
  }
  
}
