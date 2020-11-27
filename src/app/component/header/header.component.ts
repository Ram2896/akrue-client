import { Component, OnInit } from "@angular/core";
import { DeviceDetectorSer } from "src/app/service/device-detector.service";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  menuItems: any = ["HOME", "SERVICE", "PODCAST", "ABOUT US"];
  selectedItem: string = "";
  constructor(
    public _deviceDetectorService: DeviceDetectorSer,
    public _helper: HelperService
  ) {}
  menuopen: Boolean = false;

  ngOnInit(): void {
    AOS.init({
      once: true,
      offset: 200,
      duration: 300,
      easing: "ease-in-sine",
      delay: 400,
    });
    // console.log(this._deviceDetectorService.isMobile);
    // console.log("component name", this._helper.getComponentname();)
    this._helper.addComponentname("header");
    this.menuopen = false;
  }

  listClick(event, newValue) {
    console.log(newValue);

    this.selectedItem = newValue; 
  }
  
  closeMenu() {
    console.log("befo",this.selectedItem);
    this.selectedItem = ""; 
    console.log("after",this.selectedItem);

    $('.navbar-collapse').removeClass('show');   
    $('.navbar-collapse').addClass('hide');   
  }
}
