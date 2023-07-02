import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ThePropertiesFinder.com';
  showLoader = true;
  loadingTime = 1000;

  ngOnInit() {
  setTimeout(() => {
    this.showLoader = false;
  }, this.loadingTime);
}
}
