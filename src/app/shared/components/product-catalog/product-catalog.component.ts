import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit{
  @Input() title: string;
  @Input() cant: number;
  lang: String;

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
    this.title = 'Catalog';
    this.cant = 4;
  }

  ngOnInit(): void {
    this.properties = this.properties.slice(0, this.cant);
    console.log(this.cant)
    console.log(this.properties)
  }

  properties: Property[] = [
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: '...', address: '123 Main St', beds: 1, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'HOUSE', price: 100000, photoUrl: '...', address: '123 Main St', beds: 0, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: '...', address: '123 Main St', beds: 2, baths: 2 },
    { type: 'LAND', price: 100000, photoUrl: '...', address: '123 Main St', beds: 2, baths: 2 }
  ];

  handleImageError(event: Event) {
    const fallbackImageUrl = 'assets/images/default-property.jpeg';
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = fallbackImageUrl;
  }
}
