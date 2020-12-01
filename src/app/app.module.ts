import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ServiceComponent } from './component/service/service.component';
import { PodcastComponent } from './component/podcast/podcast.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { WaitListComponent } from './component/wait-list/wait-list.component';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { WaitlistListComponent } from './component/waitlist-list/waitlist-list.component';
import { SubmitComponent } from './component/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ServiceComponent,
    PodcastComponent,
    AboutUsComponent,
    ContactUsComponent,
    WaitListComponent,
    LoginComponentComponent,
    WaitlistListComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
