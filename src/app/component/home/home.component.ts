import { Component, OnInit } from '@angular/core';
import { DeviceDetectorSer } from 'src/app/service/device-detector.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  menuItems :any = ['HOME','SERVICE','PODCAST','ABOUT US']
  selectedItem: string ="HOME";
  constructor(public _deviceDetectorService :DeviceDetectorSer ) {
  }

  ngOnInit(): void {
    console.log(this._deviceDetectorService.isMobile)
  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}



}
