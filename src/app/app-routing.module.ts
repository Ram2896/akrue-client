import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { ServiceComponent } from './component/service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'SERVICE', component: ServiceComponent },
  { path: 'PODCAST', component: PodcastComponent },
  { path: 'ABOUT US', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
