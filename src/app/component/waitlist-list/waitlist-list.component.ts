import { Component, OnInit } from "@angular/core";
import { HelperService } from 'src/app/service/helper.service';
import * as AOS from "aos";

@Component({
  selector: "app-waitlist-list",
  templateUrl: "./waitlist-list.component.html",
  styleUrls: ["./waitlist-list.component.scss"],
})
export class WaitlistListComponent implements OnInit {
  constructor(
    private _helper:HelperService

  ) {}

  wList: any;

  ngOnInit(): void {
    // AOS.init({
    //   once: true,
    //   offset: 200,
    //   duration: 400,
    //   easing: "ease-in-sine",
    //   delay: 300
    // });
    this.wList = [
      {
        firstName: "Ram",
        lastName: "Chari",
        university: "PMU",
        graduatingYear: "2021",
        sports: "Shuttle",
        gender: "Male",
        instaUserName: "@ram96",
        refererEmail: "haris@gmail.com",
        email: "ram96@gmail.com",
      },
      {
        firstName: "Harish",
        lastName: "babu",
        university: "SU",
        graduatingYear: "2022",
        sports: "Shuttle",
        gender: "Male",
        instaUserName: "@Harish96",
        refererEmail: "raghavan@gmail.com",
        email: "harish96@gmail.com",
      },
    ];
  this._helper.addComponentname("userist"); 

  }
}
