import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-waitlist-list",
  templateUrl: "./waitlist-list.component.html",
  styleUrls: ["./waitlist-list.component.scss"],
})
export class WaitlistListComponent implements OnInit {
  constructor() {}

  wList: any;

  ngOnInit(): void {
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
  }
}
