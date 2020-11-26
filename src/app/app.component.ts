import { Component } from '@angular/core';
// import * as AOS from 'aos';
import { DeviceDetectorSer } from 'src/app/service/device-detector.service';
declare var $: any;
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arkue-Client';
  showLoader : boolean = true;
  constructor(public _deviceDetectorService :DeviceDetectorSer ) {
  }
  ngOnInit(){
    AOS.init({
      once: true,
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 300
    });
    // AOS.init();
    setTimeout(() => {
      this.showLoader = false;
    }, 4000);
  }
}
