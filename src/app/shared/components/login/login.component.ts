import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  isClicked: boolean = false;

  constructor(private formBuilder: FormBuilder){}

  setClicked() {
    this.isClicked = true;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: environment.GOOGLE_SSO_CLIENT_ID,
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { size: "large", theme: "outline" }  
    );
  }

  handleGoogleSignIn(response: any) {
    console.log(response.credential);

    // This next is for decoding the idToken to an object if you want to see the details.
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    console.log(JSON.parse(jsonPayload));
  }


}
