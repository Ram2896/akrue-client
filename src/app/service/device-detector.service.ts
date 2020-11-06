import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorSer {
  deviceInfo = null;
  constructor(private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  isMobile: boolean 
  isTablet:boolean
  isDesktopDevice : boolean

 

  epicFunction() {
    console.log('hello `Home` component');
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.deviceInfo = this.deviceService.getDeviceInfo();
    // console.log(this.deviceInfo);
    // console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    // console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}
