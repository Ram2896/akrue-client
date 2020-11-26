import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
  constructor(private _helper: HelperService) {}

  ngOnInit(): void {
    this._helper.addComponentname("aboutus");
    // AOS.init({
    //   once: true,
    //   offset: 200,
    //   duration: 400,
    //   easing: "ease-in-sine",
    //   delay: 300
    // });
  }
}
