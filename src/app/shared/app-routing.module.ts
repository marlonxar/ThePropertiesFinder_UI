import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAgentComponent } from '../mainModules/find-agent/find-agent.component';
import { BlogComponent } from '../mainModules/blog/blog.component';
import { ContactComponent } from '../mainModules/contact/contact.component';
import { ServicesComponent } from '../mainModules/services/services.component';
import { LandingPageComponent } from '../mainModules/landing-page/landing-page.component';
import { AboutUsComponent } from '../mainModules/about-us/about-us.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'find-agent', component: FindAgentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: '*', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
