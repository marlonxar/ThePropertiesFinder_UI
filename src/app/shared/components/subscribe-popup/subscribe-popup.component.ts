import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subscribe-popup',
  templateUrl: './subscribe-popup.component.html',
  styleUrls: ['./subscribe-popup.component.scss']
})
export class SubscribePopupComponent implements OnInit{
  showPopup = false;
  lang: String;
  yourEmailKey: string = 'Your_Email';

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit() {
    this.translateService.get('Your_Email').subscribe((translation: string) => {
      this.yourEmailKey = translation;});

  setTimeout(() => {
    this.showPopup = true; 
  }, 5000);
}

}
