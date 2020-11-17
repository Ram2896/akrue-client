import { Component } from '@angular/core';
// import * as AOS from 'aos';
import { DeviceDetectorSer } from 'src/app/service/device-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Arkue-Client';
  constructor(public _deviceDetectorService :DeviceDetectorSer ) {
  }
  ngOnInit(){
    // AOS.init();
  }
}
