import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { ServiceComponent } from './component/service/service.component';
import { WaitListComponent } from './component/wait-list/wait-list.component';
import { WaitlistListComponent } from './component/waitlist-list/waitlist-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'SERVICE', component: ServiceComponent },
  { path: 'PODCAST', component: PodcastComponent },
  { path: 'ABOUT US', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'wait-list', component: WaitListComponent },
  { path: 'admin/login', component: LoginComponentComponent },
  { path: 'admin/waitlist', component: WaitlistListComponent },
  { path: '**', redirectTo: 'HOME'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
