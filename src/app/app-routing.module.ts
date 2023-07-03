import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAgentComponent } from './find-agent/find-agent.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'find-agent', component: FindAgentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
