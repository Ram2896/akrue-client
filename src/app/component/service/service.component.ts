import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/service/helper.service";
import * as AOS from "aos";
@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  constructor(private _helper: HelperService) {}

  ngOnInit(): void {
    this._helper.addComponentname("service");
    AOS.init({
      once: true,
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 400,
    });
  }
}
