import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  lang: String;
  yourEmailKey: string = 'Your_Email';

constructor(private translateService: TranslateService){
  this.lang = localStorage.getItem('lang') || 'en';
}
ngOnInit(): void {
  
  this.translateService.get('Your_Email').subscribe((translation: string) => {
    this.yourEmailKey = translation;});

}

changeLang(target: EventTarget | null) {
  if (target instanceof HTMLSelectElement) {
    const lang = target.value;
   localStorage.setItem('lang', lang);
   window.location.reload();
  }
}

}
