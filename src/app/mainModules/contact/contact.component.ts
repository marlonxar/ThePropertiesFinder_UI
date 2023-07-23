import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class ContactComponent implements OnInit{
  contactForm: FormGroup = new FormGroup({});
  lang: String;
  isVisible = true;

  constructor(private formBuilder: FormBuilder, private translateService: TranslateService){
    this.lang = localStorage.getItem('lang') || 'en';
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      affair: ['', Validators.required],
      message: ['', Validators.required]
    });

    
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
