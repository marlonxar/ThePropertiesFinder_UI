import { trigger, style, animate, transition } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
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

export class LandingPageComponent{
  isVisible = true;

  constructor(private elementRef: ElementRef) {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  scrollToProductCatalog() {
   // Obtiene la altura del componente
   const element = this.elementRef.nativeElement;
   const offset = element.offsetHeight/2.85;

   // Realiza el desplazamiento hacia abajo
   window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
  }

}
