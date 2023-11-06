import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Agent {
  name: string;
  place: string;
  number: number;
  photoUrl: string;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})

export class AgentsComponent{
  lang: String;

  agents: Agent[] = [
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' },
    { name: 'Marlon Alvarez Rodriguez', place: "San Carlos, Alajuela", number: 88211761, photoUrl: '../assets/images/marlon.jpeg' }
  ];

  constructor(private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }

  handleImageError(event: Event) {
    const fallbackImageUrl = '../assets/images/marlon.jpeg';
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = fallbackImageUrl;
  }
}
