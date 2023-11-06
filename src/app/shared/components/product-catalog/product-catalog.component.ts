import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, style, animate, transition } from '@angular/animations';

interface Property {
  type: string;
  price: number;
  photoUrl: string;
  address: string;
  beds: number;
  baths: number;
}

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ProductCatalogComponent implements OnInit{
  @Input() title: string;
  @Input() cant: number;
  lang: String;

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
    this.title = 'Catalog';
    this.cant = -1;
  }

  ngOnInit(): void {
    if(this.cant != -1){
    this.properties = this.properties.slice(0, this.cant);
  }
    console.log(this.cant)
    console.log(this.properties)
  }

  properties: Property[] = [
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: 'https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/newsletter/_d_ambrosio_07._copy.jpg?1648119692', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62EqWHT2O1LxEh5X2GnLxIeTU1LJ2zYz0Bw&usqp=CAU', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxVRXHH5YHwidk3zarOiGxPcd-Z5MFVNDig&usqp=CAU', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: 'https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: 'https://images.adsttc.com/media/images/5bba/9118/f197/ccfd/d500/00c7/newsletter/38504-.jpg?1538953492', address: '123 Main St', beds: 0, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: 'https://images.homify.com/image/upload/c_scale,h_375,w_500/v1441858219/p/photo/image/892552/005.jpg', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: 'https://cdn.shopify.com/s/files/1/0057/5897/6069/files/Increibles-estilos-de-casas-modernas-1_1024x1024.jpg?v=1556215350', address: '123 Main St', beds: 2, baths: 2 }
  ];

  handleImageError(event: Event) {
    const fallbackImageUrl = 'assets/images/default-property.jpeg';
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = fallbackImageUrl;
  }
}
