import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-popup',
  templateUrl: './subscribe-popup.component.html',
  styleUrls: ['./subscribe-popup.component.scss']
})
export class SubscribePopupComponent {
  showPopup = false;

  closePopup() {
    this.showPopup = false;
  }

  ngOnInit() {
  setTimeout(() => {
    this.showPopup = true; // Mostrar el componente después de 5 segundos
  }, 5000);
}

}
